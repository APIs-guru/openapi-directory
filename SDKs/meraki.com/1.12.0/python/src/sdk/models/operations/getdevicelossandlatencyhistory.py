from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class GetDeviceLossAndLatencyHistoryPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class GetDeviceLossAndLatencyHistoryUplinkEnum(str, Enum):
    WAN1 = "wan1"
    WAN2 = "wan2"
    CELLULAR = "cellular"


@dataclass
class GetDeviceLossAndLatencyHistoryQueryParams:
    ip: str = field(metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    resolution: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    uplink: Optional[GetDeviceLossAndLatencyHistoryUplinkEnum] = field(default=None, metadata={'query_param': { 'field_name': 'uplink', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceLossAndLatencyHistoryRequest:
    path_params: GetDeviceLossAndLatencyHistoryPathParams = field()
    query_params: GetDeviceLossAndLatencyHistoryQueryParams = field()
    

@dataclass
class GetDeviceLossAndLatencyHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_loss_and_latency_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
