from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsPartialUpdateRequest:
    path_params: DcimConsolePortsPartialUpdatePathParams = field()
    request: shared.WritableConsolePortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    console_port: Optional[shared.ConsolePort] = field(default=None)
    
