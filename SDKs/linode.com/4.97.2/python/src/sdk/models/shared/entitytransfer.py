from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EntityTransferEntities:
    linodes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linodes' }})
    
class EntityTransferStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    CANCELLED = "cancelled"
    COMPLETED = "completed"
    FAILED = "failed"
    PENDING = "pending"
    STALE = "stale"


@dataclass_json
@dataclass
class EntityTransfer:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entities: Optional[EntityTransferEntities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_sender: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_sender' }})
    status: Optional[EntityTransferStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
