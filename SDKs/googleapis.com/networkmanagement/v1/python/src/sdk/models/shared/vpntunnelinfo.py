from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VpnTunnelInfoRoutingTypeEnum(str, Enum):
    ROUTING_TYPE_UNSPECIFIED = "ROUTING_TYPE_UNSPECIFIED"
    ROUTE_BASED = "ROUTE_BASED"
    POLICY_BASED = "POLICY_BASED"
    DYNAMIC = "DYNAMIC"


@dataclass_json
@dataclass
class VpnTunnelInfo:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    remote_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteGateway' }})
    remote_gateway_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteGatewayIp' }})
    routing_type: Optional[VpnTunnelInfoRoutingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingType' }})
    source_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceGateway' }})
    source_gateway_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceGatewayIp' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
