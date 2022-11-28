from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkClientsUsageHistoriesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkClientsUsageHistoriesQueryParams:
    clients: str = field(metadata={'query_param': { 'field_name': 'clients', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    ssid_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssidNumber', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkClientsUsageHistoriesRequest:
    path_params: GetNetworkClientsUsageHistoriesPathParams = field()
    query_params: GetNetworkClientsUsageHistoriesQueryParams = field()
    

@dataclass
class GetNetworkClientsUsageHistoriesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_network_clients_usage_histories_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
