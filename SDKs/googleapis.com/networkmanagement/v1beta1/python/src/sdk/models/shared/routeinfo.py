from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class RouteInfoNextHopTypeEnum(str, Enum):
    NEXT_HOP_TYPE_UNSPECIFIED = "NEXT_HOP_TYPE_UNSPECIFIED"
    NEXT_HOP_IP = "NEXT_HOP_IP"
    NEXT_HOP_INSTANCE = "NEXT_HOP_INSTANCE"
    NEXT_HOP_NETWORK = "NEXT_HOP_NETWORK"
    NEXT_HOP_PEERING = "NEXT_HOP_PEERING"
    NEXT_HOP_INTERCONNECT = "NEXT_HOP_INTERCONNECT"
    NEXT_HOP_VPN_TUNNEL = "NEXT_HOP_VPN_TUNNEL"
    NEXT_HOP_VPN_GATEWAY = "NEXT_HOP_VPN_GATEWAY"
    NEXT_HOP_INTERNET_GATEWAY = "NEXT_HOP_INTERNET_GATEWAY"
    NEXT_HOP_BLACKHOLE = "NEXT_HOP_BLACKHOLE"
    NEXT_HOP_ILB = "NEXT_HOP_ILB"
    NEXT_HOP_ROUTER_APPLIANCE = "NEXT_HOP_ROUTER_APPLIANCE"

class RouteInfoRouteTypeEnum(str, Enum):
    ROUTE_TYPE_UNSPECIFIED = "ROUTE_TYPE_UNSPECIFIED"
    SUBNET = "SUBNET"
    STATIC = "STATIC"
    DYNAMIC = "DYNAMIC"
    PEERING_SUBNET = "PEERING_SUBNET"
    PEERING_STATIC = "PEERING_STATIC"
    PEERING_DYNAMIC = "PEERING_DYNAMIC"
    POLICY_BASED_ROUTE = "POLICY_BASED_ROUTE"


@dataclass_json
@dataclass
class RouteInfo:
    dest_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destIpRange' }})
    dest_port_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destPortRanges' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    instance_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTags' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    next_hop: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextHop' }})
    next_hop_type: Optional[RouteInfoNextHopTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextHopType' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    protocols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    route_type: Optional[RouteInfoRouteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeType' }})
    src_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcIpRange' }})
    src_port_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcPortRanges' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
