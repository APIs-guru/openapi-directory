from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCellularGatewayUplinkPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCellularGatewayUplinkRequest:
    path_params: GetNetworkCellularGatewayUplinkPathParams = field(default=None)
    

@dataclass
class GetNetworkCellularGatewayUplinkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_cellular_gateway_uplink_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
