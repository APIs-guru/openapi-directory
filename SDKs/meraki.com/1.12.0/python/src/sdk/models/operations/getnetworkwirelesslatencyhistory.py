from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetNetworkWirelessLatencyHistoryPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkWirelessLatencyHistoryAccessCategoryEnum(str, Enum):
    BACKGROUND_TRAFFIC = "backgroundTraffic"
    BEST_EFFORT_TRAFFIC = "bestEffortTraffic"
    VIDEO_TRAFFIC = "videoTraffic"
    VOICE_TRAFFIC = "voiceTraffic"

class GetNetworkWirelessLatencyHistoryBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"


@dataclass
class GetNetworkWirelessLatencyHistoryQueryParams:
    access_category: Optional[GetNetworkWirelessLatencyHistoryAccessCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'accessCategory', 'style': 'form', 'explode': True }})
    ap_tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apTag', 'style': 'form', 'explode': True }})
    auto_resolution: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoResolution', 'style': 'form', 'explode': True }})
    band: Optional[GetNetworkWirelessLatencyHistoryBandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientId', 'style': 'form', 'explode': True }})
    device_serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    resolution: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    ssid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssid', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkWirelessLatencyHistoryRequest:
    path_params: GetNetworkWirelessLatencyHistoryPathParams = field(default=None)
    query_params: GetNetworkWirelessLatencyHistoryQueryParams = field(default=None)
    

@dataclass
class GetNetworkWirelessLatencyHistoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_latency_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
