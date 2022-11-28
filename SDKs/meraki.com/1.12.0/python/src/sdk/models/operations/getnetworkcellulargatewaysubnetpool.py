from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCellularGatewaySubnetPoolPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCellularGatewaySubnetPoolRequest:
    path_params: GetNetworkCellularGatewaySubnetPoolPathParams = field()
    

@dataclass
class GetNetworkCellularGatewaySubnetPoolResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_cellular_gateway_subnet_pool_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
