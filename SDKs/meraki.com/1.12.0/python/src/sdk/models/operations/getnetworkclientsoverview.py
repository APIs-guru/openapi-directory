from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkClientsOverviewPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkClientsOverviewQueryParams:
    resolution: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkClientsOverviewRequest:
    path_params: GetNetworkClientsOverviewPathParams = field()
    query_params: GetNetworkClientsOverviewQueryParams = field()
    

@dataclass
class GetNetworkClientsOverviewResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_clients_overview_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
