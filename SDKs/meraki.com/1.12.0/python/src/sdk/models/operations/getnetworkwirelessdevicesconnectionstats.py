from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetNetworkWirelessDevicesConnectionStatsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkWirelessDevicesConnectionStatsBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"


@dataclass
class GetNetworkWirelessDevicesConnectionStatsQueryParams:
    ap_tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apTag', 'style': 'form', 'explode': True }})
    band: Optional[GetNetworkWirelessDevicesConnectionStatsBandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    ssid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssid', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    vlan: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vlan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkWirelessDevicesConnectionStatsRequest:
    path_params: GetNetworkWirelessDevicesConnectionStatsPathParams = field(default=None)
    query_params: GetNetworkWirelessDevicesConnectionStatsQueryParams = field(default=None)
    

@dataclass
class GetNetworkWirelessDevicesConnectionStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_devices_connection_stats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
