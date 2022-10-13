from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RouteServerNetworkFeatureConfigUpdateBgpSessionTypeEnum(str, Enum):
    ACTIVE = "active"
    PASSIVE = "passive"

class RouteServerNetworkFeatureConfigUpdateSessionModeEnum(str, Enum):
    PUBLIC = "public"
    COLLECTOR = "collector"


@dataclass_json
@dataclass
class RouteServerNetworkFeatureConfigUpdate:
    as_set_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'as_set_v4' }})
    as_set_v6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'as_set_v6' }})
    asn: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    bgp_session_type: RouteServerNetworkFeatureConfigUpdateBgpSessionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgp_session_type' }})
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    insert_ixp_asn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert_ixp_asn' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    max_prefix_v4: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_prefix_v4' }})
    max_prefix_v6: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_prefix_v6' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    session_mode: RouteServerNetworkFeatureConfigUpdateSessionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_mode' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
