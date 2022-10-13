from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status

class RouteServerNetworkFeatureConfigBgpSessionTypeEnum(str, Enum):
    ACTIVE = "active"
    PASSIVE = "passive"

class RouteServerNetworkFeatureConfigSessionModeEnum(str, Enum):
    PUBLIC = "public"
    COLLECTOR = "collector"

class RouteServerNetworkFeatureConfigStateEnum(str, Enum):
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
class RouteServerNetworkFeatureConfig:
    as_set_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'as_set_v4' }})
    as_set_v6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'as_set_v6' }})
    asn: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    bgp_session_type: RouteServerNetworkFeatureConfigBgpSessionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgp_session_type' }})
    billing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_account' }})
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    contract_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_ref' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    insert_ixp_asn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert_ixp_asn' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    max_prefix_v4: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_prefix_v4' }})
    max_prefix_v6: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_prefix_v6' }})
    network_feature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_feature' }})
    network_service_config: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_service_config' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order' }})
    role_assignments: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role_assignments' }})
    session_mode: RouteServerNetworkFeatureConfigSessionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_mode' }})
    state: RouteServerNetworkFeatureConfigStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
