from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedprovider
from . import nestedtenant
from . import circuitcircuittermination
from . import circuitcircuittermination
from . import nestedcircuittype

class CircuitStatusLabelEnum(str, Enum):
    PLANNED = "Planned"
    PROVISIONING = "Provisioning"
    ACTIVE = "Active"
    OFFLINE = "Offline"
    DEPROVISIONING = "Deprovisioning"
    DECOMMISSIONED = "Decommissioned"

class CircuitStatusValueEnum(str, Enum):
    PLANNED = "planned"
    PROVISIONING = "provisioning"
    ACTIVE = "active"
    OFFLINE = "offline"
    DEPROVISIONING = "deprovisioning"
    DECOMMISSIONED = "decommissioned"


@dataclass_json
@dataclass
class CircuitStatus:
    label: CircuitStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: CircuitStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Circuit:
    cid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cid' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    commit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_rate' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    install_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'install_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provider: nestedprovider.NestedProvider = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    status: Optional[CircuitStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    termination_a: Optional[circuitcircuittermination.CircuitCircuitTermination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termination_a' }})
    termination_z: Optional[circuitcircuittermination.CircuitCircuitTermination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termination_z' }})
    type: nestedcircuittype.NestedCircuitType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
