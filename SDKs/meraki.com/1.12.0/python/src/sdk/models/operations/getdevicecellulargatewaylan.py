from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCellularGatewayLanPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCellularGatewayLanRequest:
    path_params: GetDeviceCellularGatewayLanPathParams = field()
    

@dataclass
class GetDeviceCellularGatewayLanResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_cellular_gateway_lan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
