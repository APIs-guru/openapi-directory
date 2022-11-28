from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortTemplatesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortTemplatesPartialUpdateRequest:
    path_params: DcimRearPortTemplatesPartialUpdatePathParams = field()
    request: shared.WritableRearPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortTemplatesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rear_port_template: Optional[shared.RearPortTemplate] = field(default=None)
    
