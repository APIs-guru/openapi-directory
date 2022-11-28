from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortTemplatesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortTemplatesPartialUpdateRequest:
    path_params: DcimFrontPortTemplatesPartialUpdatePathParams = field()
    request: shared.WritableFrontPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortTemplatesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    front_port_template: Optional[shared.FrontPortTemplate] = field(default=None)
    
