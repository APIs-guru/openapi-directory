from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import subscriptionview


@dataclass_json
@dataclass
class ProductView:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    subscriptions: Optional[List[subscriptionview.SubscriptionView]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
