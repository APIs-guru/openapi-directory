from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesNapalmPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesNapalmRequest:
    path_params: DcimDevicesNapalmPathParams = field(default=None)
    

@dataclass
class DcimDevicesNapalmResponse:
    content_type: str = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    status_code: int = field(default=None)
    
