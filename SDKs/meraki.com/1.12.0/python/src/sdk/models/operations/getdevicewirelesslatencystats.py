from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetDeviceWirelessLatencyStatsPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class GetDeviceWirelessLatencyStatsBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"


@dataclass
class GetDeviceWirelessLatencyStatsQueryParams:
    ap_tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apTag', 'style': 'form', 'explode': True }})
    band: Optional[GetDeviceWirelessLatencyStatsBandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ssid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssid', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    vlan: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vlan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceWirelessLatencyStatsRequest:
    path_params: GetDeviceWirelessLatencyStatsPathParams = field(default=None)
    query_params: GetDeviceWirelessLatencyStatsQueryParams = field(default=None)
    

@dataclass
class GetDeviceWirelessLatencyStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_wireless_latency_stats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
