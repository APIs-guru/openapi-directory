from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkPiiRequestPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    request_id: str = field(default=None, metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkPiiRequestRequest:
    path_params: GetNetworkPiiRequestPathParams = field(default=None)
    

@dataclass
class GetNetworkPiiRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_pii_request_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
