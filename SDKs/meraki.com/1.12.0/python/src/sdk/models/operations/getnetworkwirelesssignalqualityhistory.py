from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class GetNetworkWirelessSignalQualityHistoryPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkWirelessSignalQualityHistoryBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"


@dataclass
class GetNetworkWirelessSignalQualityHistoryQueryParams:
    ap_tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apTag', 'style': 'form', 'explode': True }})
    auto_resolution: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoResolution', 'style': 'form', 'explode': True }})
    band: Optional[GetNetworkWirelessSignalQualityHistoryBandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientId', 'style': 'form', 'explode': True }})
    device_serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    resolution: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    ssid: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssid', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkWirelessSignalQualityHistoryRequest:
    path_params: GetNetworkWirelessSignalQualityHistoryPathParams = field()
    query_params: GetNetworkWirelessSignalQualityHistoryQueryParams = field()
    

@dataclass
class GetNetworkWirelessSignalQualityHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_signal_quality_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
