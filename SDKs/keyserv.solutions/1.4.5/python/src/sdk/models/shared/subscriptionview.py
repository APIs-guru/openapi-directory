from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import keyview


@dataclass_json
@dataclass
class SubscriptionView:
    action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    callback_on_modify: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackOnModify' }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackUrl' }})
    commenced: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commenced', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    keys: Optional[List[keyview.KeyView]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
