from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCellularGatewayDhcpPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCellularGatewayDhcpRequest:
    path_params: GetNetworkCellularGatewayDhcpPathParams = field(default=None)
    

@dataclass
class GetNetworkCellularGatewayDhcpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_cellular_gateway_dhcp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
