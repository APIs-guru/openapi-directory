from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetNetworkTrafficPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetNetworkTrafficPathParams = field(default=None)
    query_params: GetNetworkTrafficQueryParams = field(default=None)
    

@dataclass
class GetNetworkTrafficResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_traffic_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
