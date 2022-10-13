from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkPiiRequestsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkPiiRequestsRequest:
    path_params: GetNetworkPiiRequestsPathParams = field(default=None)
    

@dataclass
class GetNetworkPiiRequestsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_pii_requests_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
