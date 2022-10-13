from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class WritableCircuitStatusStatusEnum(str, Enum):
    PLANNED = "planned"
    PROVISIONING = "provisioning"
    ACTIVE = "active"
    OFFLINE = "offline"
    DEPROVISIONING = "deprovisioning"
    DECOMMISSIONED = "decommissioned"


@dataclass_json
@dataclass
class WritableCircuit:
    cid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cid' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    commit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_rate' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    install_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'install_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provider: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    status: Optional[WritableCircuitStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    termination_a: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termination_a' }})
    termination_z: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termination_z' }})
    type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
