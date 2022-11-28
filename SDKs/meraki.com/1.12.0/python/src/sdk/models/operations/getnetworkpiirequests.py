from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkPiiRequestsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkPiiRequestsRequest:
    path_params: GetNetworkPiiRequestsPathParams = field()
    

@dataclass
class GetNetworkPiiRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_pii_requests_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
