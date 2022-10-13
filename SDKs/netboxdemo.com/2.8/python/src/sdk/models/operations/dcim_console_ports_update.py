from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsUpdateRequest:
    path_params: DcimConsolePortsUpdatePathParams = field(default=None)
    request: shared.WritableConsolePort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortsUpdateResponse:
    console_port: Optional[shared.ConsolePort] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
