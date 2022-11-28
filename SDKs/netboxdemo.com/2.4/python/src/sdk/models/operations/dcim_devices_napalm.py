from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesNapalmPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesNapalmRequest:
    path_params: DcimDevicesNapalmPathParams = field()
    

@dataclass
class DcimDevicesNapalmResponse:
    content_type: str = field()
    status_code: int = field()
    device: Optional[shared.Device] = field(default=None)
    
