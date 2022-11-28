from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkClientTrafficHistoryPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkClientTrafficHistoryQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkClientTrafficHistoryRequest:
    path_params: GetNetworkClientTrafficHistoryPathParams = field()
    query_params: GetNetworkClientTrafficHistoryQueryParams = field()
    

@dataclass
class GetNetworkClientTrafficHistoryResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_network_client_traffic_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
