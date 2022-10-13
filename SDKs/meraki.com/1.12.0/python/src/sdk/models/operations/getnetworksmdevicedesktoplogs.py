from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSmDeviceDesktopLogsPathParams:
    device_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDeviceDesktopLogsQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkSmDeviceDesktopLogsRequest:
    path_params: GetNetworkSmDeviceDesktopLogsPathParams = field(default=None)
    query_params: GetNetworkSmDeviceDesktopLogsQueryParams = field(default=None)
    

@dataclass
class GetNetworkSmDeviceDesktopLogsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_device_desktop_logs_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
