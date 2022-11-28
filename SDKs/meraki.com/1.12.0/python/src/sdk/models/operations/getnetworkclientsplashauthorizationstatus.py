from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkClientSplashAuthorizationStatusPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkClientSplashAuthorizationStatusRequest:
    path_params: GetNetworkClientSplashAuthorizationStatusPathParams = field()
    

@dataclass
class GetNetworkClientSplashAuthorizationStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_client_splash_authorization_status_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
