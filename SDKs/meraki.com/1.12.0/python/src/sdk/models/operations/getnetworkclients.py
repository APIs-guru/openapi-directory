from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum


@dataclass
class GetNetworkClientsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkClientsRecentDeviceConnectionsEnum(str, Enum):
    WIRED = "Wired"
    WIRELESS = "Wireless"

class GetNetworkClientsStatusesEnum(str, Enum):
    ONLINE = "Online"
    OFFLINE = "Offline"


@dataclass
class GetNetworkClientsQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    ip6: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip6', 'style': 'form', 'explode': True }})
    ip6_local: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip6Local', 'style': 'form', 'explode': True }})
    mac: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac', 'style': 'form', 'explode': True }})
    os: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'os', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    recent_device_connections: Optional[List[GetNetworkClientsRecentDeviceConnectionsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'recentDeviceConnections', 'style': 'form', 'explode': False }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    statuses: Optional[List[GetNetworkClientsStatusesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'statuses', 'style': 'form', 'explode': False }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkClientsRequest:
    path_params: GetNetworkClientsPathParams = field()
    query_params: GetNetworkClientsQueryParams = field()
    

@dataclass
class GetNetworkClientsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_network_clients_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
