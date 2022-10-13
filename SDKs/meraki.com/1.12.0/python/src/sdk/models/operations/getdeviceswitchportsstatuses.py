from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchPortsStatusesPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchPortsStatusesQueryParams:
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceSwitchPortsStatusesRequest:
    path_params: GetDeviceSwitchPortsStatusesPathParams = field(default=None)
    query_params: GetDeviceSwitchPortsStatusesQueryParams = field(default=None)
    

@dataclass
class GetDeviceSwitchPortsStatusesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_switch_ports_statuses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
