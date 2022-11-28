from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCellularGatewayDhcpPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCellularGatewayDhcpRequest:
    path_params: GetNetworkCellularGatewayDhcpPathParams = field()
    

@dataclass
class GetNetworkCellularGatewayDhcpResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_cellular_gateway_dhcp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
