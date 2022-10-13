from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCellularGatewayLanPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCellularGatewayLanRequest:
    path_params: GetDeviceCellularGatewayLanPathParams = field(default=None)
    

@dataclass
class GetDeviceCellularGatewayLanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_cellular_gateway_lan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
