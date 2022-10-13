from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VpnGatewayInfo:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    vpn_tunnel_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpnTunnelUri' }})
    
