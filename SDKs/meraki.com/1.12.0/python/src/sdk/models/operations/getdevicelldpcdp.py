from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceLldpCdpPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceLldpCdpRequest:
    path_params: GetDeviceLldpCdpPathParams = field(default=None)
    

@dataclass
class GetDeviceLldpCdpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_lldp_cdp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
