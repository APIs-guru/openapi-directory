from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCellularGatewayUplinkPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCellularGatewayUplinkRequest:
    path_params: GetNetworkCellularGatewayUplinkPathParams = field()
    

@dataclass
class GetNetworkCellularGatewayUplinkResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_cellular_gateway_uplink_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
