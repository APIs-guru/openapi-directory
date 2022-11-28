from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkBluetoothClientsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkBluetoothClientsQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    include_connectivity_history: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeConnectivityHistory', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkBluetoothClientsRequest:
    path_params: GetNetworkBluetoothClientsPathParams = field()
    query_params: GetNetworkBluetoothClientsQueryParams = field()
    

@dataclass
class GetNetworkBluetoothClientsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_network_bluetooth_clients_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
