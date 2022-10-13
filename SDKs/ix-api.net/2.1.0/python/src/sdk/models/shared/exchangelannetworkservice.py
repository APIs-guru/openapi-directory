from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status

class ExchangeLanNetworkServiceStateEnum(str, Enum):
    REQUESTED = "requested"
    ALLOCATED = "allocated"
    TESTING = "testing"
    PRODUCTION = "production"
    PRODUCTION_CHANGE_PENDING = "production_change_pending"
    DECOMMISSION_REQUESTED = "decommission_requested"
    DECOMMISSIONED = "decommissioned"
    ARCHIVED = "archived"
    ERROR = "error"
    OPERATOR = "operator"
    SCHEDULED = "scheduled"


@dataclass_json
@dataclass
class ExchangeLanNetworkService:
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ixfdb_ixid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ixfdb_ixid' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    metro_area_network: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_area_network' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_features: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_features' }})
    nsc_required_contact_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsc_required_contact_roles' }})
    peeringdb_ixid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeringdb_ixid' }})
    product_offering: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_offering' }})
    state: ExchangeLanNetworkServiceStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subnet_v4: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet_v4' }})
    subnet_v6: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet_v6' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
