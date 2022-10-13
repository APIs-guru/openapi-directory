from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchPortsStatusesPacketsPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchPortsStatusesPacketsQueryParams:
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceSwitchPortsStatusesPacketsRequest:
    path_params: GetDeviceSwitchPortsStatusesPacketsPathParams = field(default=None)
    query_params: GetDeviceSwitchPortsStatusesPacketsQueryParams = field(default=None)
    

@dataclass
class GetDeviceSwitchPortsStatusesPacketsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_switch_ports_statuses_packets_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
