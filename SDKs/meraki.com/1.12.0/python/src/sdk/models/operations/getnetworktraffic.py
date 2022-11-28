from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class GetNetworkTrafficPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkTrafficDeviceTypeEnum(str, Enum):
    COMBINED = "combined"
    WIRELESS = "wireless"
    SWITCH = "switch"
    APPLIANCE = "appliance"


@dataclass
class GetNetworkTrafficQueryParams:
    device_type: Optional[GetNetworkTrafficDeviceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'deviceType', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkTrafficRequest:
    path_params: GetNetworkTrafficPathParams = field()
    query_params: GetNetworkTrafficQueryParams = field()
    

@dataclass
class GetNetworkTrafficResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_traffic_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
