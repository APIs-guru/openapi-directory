from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortTemplatesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortTemplatesUpdateRequest:
    path_params: DcimConsoleServerPortTemplatesUpdatePathParams = field()
    request: shared.WritableConsoleServerPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortTemplatesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    console_server_port_template: Optional[shared.ConsoleServerPortTemplate] = field(default=None)
    
