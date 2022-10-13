from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkCellularGatewaySubnetPoolPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewaySubnetPoolRequestBody:
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidr' }})
    mask: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mask' }})
    

@dataclass
class UpdateNetworkCellularGatewaySubnetPoolRequest:
    path_params: UpdateNetworkCellularGatewaySubnetPoolPathParams = field(default=None)
    request: Optional[UpdateNetworkCellularGatewaySubnetPoolRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCellularGatewaySubnetPoolResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_cellular_gateway_subnet_pool_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
