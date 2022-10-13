from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkClientsUsageHistoriesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkClientsUsageHistoriesQueryParams:
    clients: str = field(default=None, metadata={'query_param': { 'field_name': 'clients', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    ssid_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssidNumber', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkClientsUsageHistoriesRequest:
    path_params: GetNetworkClientsUsageHistoriesPathParams = field(default=None)
    query_params: GetNetworkClientsUsageHistoriesQueryParams = field(default=None)
    

@dataclass
class GetNetworkClientsUsageHistoriesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_network_clients_usage_histories_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
