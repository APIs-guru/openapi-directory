from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortTemplatesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortTemplatesPartialUpdateRequest:
    path_params: DcimConsolePortTemplatesPartialUpdatePathParams = field()
    request: shared.WritableConsolePortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortTemplatesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    console_port_template: Optional[shared.ConsolePortTemplate] = field(default=None)
    
