from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesNapalmPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesNapalmQueryParams:
    method: str = field(default=None, metadata={'query_param': { 'field_name': 'method', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimDevicesNapalmRequest:
    path_params: DcimDevicesNapalmPathParams = field(default=None)
    query_params: DcimDevicesNapalmQueryParams = field(default=None)
    

@dataclass
class DcimDevicesNapalmResponse:
    content_type: str = field(default=None)
    device_napalm: Optional[shared.DeviceNapalm] = field(default=None)
    status_code: int = field(default=None)
    
