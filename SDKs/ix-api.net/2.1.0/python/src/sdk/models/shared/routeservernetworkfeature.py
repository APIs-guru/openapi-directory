from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ixpspecificfeatureflag

class RouteServerNetworkFeatureAddressFamiliesEnum(str, Enum):
    AF_INET = "af_inet"
    AF_INET6 = "af_inet6"

class RouteServerNetworkFeatureAvailableBgpSessionTypesEnum(str, Enum):
    ACTIVE = "active"
    PASSIVE = "passive"

class RouteServerNetworkFeatureSessionModeEnum(str, Enum):
    PUBLIC = "public"
    COLLECTOR = "collector"


@dataclass_json
@dataclass
class RouteServerNetworkFeature:
    address_families: List[RouteServerNetworkFeatureAddressFamiliesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_families' }})
    asn: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    available_bgp_session_types: List[RouteServerNetworkFeatureAvailableBgpSessionTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_bgp_session_types' }})
    flags: List[ixpspecificfeatureflag.IxpSpecificFeatureFlag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    fqdn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fqdn' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_v4: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_v4' }})
    ip_v6: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_v6' }})
    looking_glass_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'looking_glass_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_service' }})
    nfc_required_contact_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfc_required_contact_roles' }})
    required: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    session_mode: RouteServerNetworkFeatureSessionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_mode' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
