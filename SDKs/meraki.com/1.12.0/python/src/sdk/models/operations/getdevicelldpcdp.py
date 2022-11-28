from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceLldpCdpPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceLldpCdpRequest:
    path_params: GetDeviceLldpCdpPathParams = field()
    

@dataclass
class GetDeviceLldpCdpResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_lldp_cdp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
