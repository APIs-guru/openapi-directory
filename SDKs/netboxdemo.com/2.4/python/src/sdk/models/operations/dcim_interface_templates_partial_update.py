from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceTemplatesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceTemplatesPartialUpdateRequest:
    path_params: DcimInterfaceTemplatesPartialUpdatePathParams = field()
    request: shared.WritableInterfaceTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfaceTemplatesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    interface_template: Optional[shared.InterfaceTemplate] = field(default=None)
    
