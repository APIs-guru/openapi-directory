from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSmDeviceConnectivityPathParams:
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDeviceConnectivityQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmDeviceConnectivityRequest:
    path_params: GetNetworkSmDeviceConnectivityPathParams = field()
    query_params: GetNetworkSmDeviceConnectivityQueryParams = field()
    

@dataclass
class GetNetworkSmDeviceConnectivityResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_network_sm_device_connectivity_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
