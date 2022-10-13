from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status

class ConnectionLacpTimeoutEnum(str, Enum):
    SLOW = "slow"
    FAST = "fast"

class ConnectionModeEnum(str, Enum):
    LAG_LACP = "lag_lacp"
    LAG_STATIC = "lag_static"
    FLEX_ETHERNET = "flex_ethernet"
    STANDALONE = "standalone"

class ConnectionOuterVlanEthertypesEnum(str, Enum):
    ZEROX8100 = "0x8100"
    ZEROX88A8 = "0x88a8"
    ZEROX9100 = "0x9100"

class ConnectionStateEnum(str, Enum):
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

class ConnectionVlanTypesEnum(str, Enum):
    PORT = "port"
    DOT1Q = "dot1q"
    QINQ = "qinq"


@dataclass_json
@dataclass
class Connection:
    billing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_account' }})
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    contract_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_ref' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lacp_timeout: Optional[ConnectionLacpTimeoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lacp_timeout' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    mode: ConnectionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outer_vlan_ethertypes: List[ConnectionOuterVlanEthertypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_vlan_ethertypes' }})
    ports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order' }})
    role_assignments: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role_assignments' }})
    speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speed' }})
    state: ConnectionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    vlan_types: List[ConnectionVlanTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan_types' }})
    
