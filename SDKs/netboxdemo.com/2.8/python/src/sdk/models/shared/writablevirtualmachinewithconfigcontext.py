from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class WritableVirtualMachineWithConfigContextStatusStatusEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    STAGED = "staged"
    FAILED = "failed"
    DECOMMISSIONING = "decommissioning"


@dataclass_json
@dataclass
class WritableVirtualMachineWithConfigContext:
    cluster: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    config_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_context' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_context_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'local_context_data' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    primary_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip' }})
    primary_ip4: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip4' }})
    primary_ip6: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip6' }})
    role: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[WritableVirtualMachineWithConfigContextStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    
