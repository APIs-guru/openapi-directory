from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSmDevicePerformanceHistoryPathParams:
    device_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDevicePerformanceHistoryQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmDevicePerformanceHistoryRequest:
    path_params: GetNetworkSmDevicePerformanceHistoryPathParams = field(default=None)
    query_params: GetNetworkSmDevicePerformanceHistoryQueryParams = field(default=None)
    

@dataclass
class GetNetworkSmDevicePerformanceHistoryResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_device_performance_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
