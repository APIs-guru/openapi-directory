from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortTemplatesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortTemplatesUpdateRequest:
    path_params: DcimFrontPortTemplatesUpdatePathParams = field()
    request: shared.WritableFrontPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortTemplatesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    front_port_template: Optional[shared.FrontPortTemplate] = field(default=None)
    
