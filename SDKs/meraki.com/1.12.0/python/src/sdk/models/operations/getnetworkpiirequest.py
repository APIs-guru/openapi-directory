from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkPiiRequestPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    request_id: str = field(metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkPiiRequestRequest:
    path_params: GetNetworkPiiRequestPathParams = field()
    

@dataclass
class GetNetworkPiiRequestResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_pii_request_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
