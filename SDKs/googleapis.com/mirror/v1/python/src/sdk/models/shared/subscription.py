from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notification


@dataclass_json
@dataclass
class Subscription:
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackUrl' }})
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    notification: Optional[notification.Notification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    operation: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userToken' }})
    verify_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyToken' }})
    
