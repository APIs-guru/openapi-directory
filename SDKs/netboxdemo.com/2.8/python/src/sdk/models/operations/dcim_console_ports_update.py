from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsUpdateRequest:
    path_params: DcimConsolePortsUpdatePathParams = field()
    request: shared.WritableConsolePortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    console_port: Optional[shared.ConsolePort] = field(default=None)
    
