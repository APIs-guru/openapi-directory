from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class GetDeviceWirelessConnectionStatsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class GetDeviceWirelessConnectionStatsBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"


@dataclass
class GetDeviceWirelessConnectionStatsQueryParams:
    ap_tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apTag', 'style': 'form', 'explode': True }})
    band: Optional[GetDeviceWirelessConnectionStatsBandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    ssid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssid', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    vlan: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vlan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceWirelessConnectionStatsRequest:
    path_params: GetDeviceWirelessConnectionStatsPathParams = field()
    query_params: GetDeviceWirelessConnectionStatsQueryParams = field()
    

@dataclass
class GetDeviceWirelessConnectionStatsResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_wireless_connection_stats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
