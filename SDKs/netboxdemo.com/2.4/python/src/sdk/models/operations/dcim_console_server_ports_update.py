from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortsUpdateRequest:
    path_params: DcimConsoleServerPortsUpdatePathParams = field()
    request: shared.WritableConsoleServerPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    console_server_port: Optional[shared.ConsoleServerPort] = field(default=None)
    
