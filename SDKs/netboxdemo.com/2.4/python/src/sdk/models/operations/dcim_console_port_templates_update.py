from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortTemplatesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortTemplatesUpdateRequest:
    path_params: DcimConsolePortTemplatesUpdatePathParams = field()
    request: shared.WritableConsolePortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortTemplatesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    console_port_template: Optional[shared.ConsolePortTemplate] = field(default=None)
    
