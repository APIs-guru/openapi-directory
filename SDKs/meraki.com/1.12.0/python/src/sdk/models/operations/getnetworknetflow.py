from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkNetflowPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkNetflowRequest:
    path_params: GetNetworkNetflowPathParams = field()
    

@dataclass
class GetNetworkNetflowResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_netflow_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
