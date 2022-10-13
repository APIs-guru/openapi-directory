from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsPartialUpdateRequest:
    path_params: DcimConsolePortsPartialUpdatePathParams = field(default=None)
    request: shared.WritableConsolePort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortsPartialUpdateResponse:
    console_port: Optional[shared.ConsolePort] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
