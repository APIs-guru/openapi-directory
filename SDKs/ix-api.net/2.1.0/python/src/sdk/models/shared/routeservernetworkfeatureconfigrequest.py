from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnum(str, Enum):
    ACTIVE = "active"
    PASSIVE = "passive"

class RouteServerNetworkFeatureConfigRequestSessionModeEnum(str, Enum):
    PUBLIC = "public"
    COLLECTOR = "collector"


@dataclass_json
@dataclass
class RouteServerNetworkFeatureConfigRequest:
    as_set_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'as_set_v4' }})
    as_set_v6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'as_set_v6' }})
    asn: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    bgp_session_type: RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgp_session_type' }})
    billing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_account' }})
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    contract_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_ref' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
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
    session_mode: RouteServerNetworkFeatureConfigRequestSessionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_mode' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
