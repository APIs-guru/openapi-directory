from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSplashLoginAttemptsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSplashLoginAttemptsQueryParams:
    login_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'loginIdentifier', 'style': 'form', 'explode': True }})
    ssid_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssidNumber', 'style': 'form', 'explode': True }})
    timespan: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSplashLoginAttemptsRequest:
    path_params: GetNetworkSplashLoginAttemptsPathParams = field()
    query_params: GetNetworkSplashLoginAttemptsQueryParams = field()
    

@dataclass
class GetNetworkSplashLoginAttemptsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_splash_login_attempts_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
