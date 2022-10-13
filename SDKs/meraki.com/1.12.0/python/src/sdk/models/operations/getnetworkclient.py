from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkClientPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkClientRequest:
    path_params: GetNetworkClientPathParams = field(default=None)
    

@dataclass
class GetNetworkClientResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_client_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
