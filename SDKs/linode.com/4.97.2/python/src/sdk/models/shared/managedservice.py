from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ManagedServiceServiceTypeEnum(str, Enum):
    URL = "url"
    TCP = "tcp"

class ManagedServiceStatusEnum(str, Enum):
    DISABLED = "disabled"
    PENDING = "pending"
    OK = "ok"
    PROBLEM = "problem"


@dataclass_json
@dataclass
class ManagedService:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    consultation_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consultation_group' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credentials: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    service_type: Optional[ManagedServiceServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_type' }})
    status: Optional[ManagedServiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
