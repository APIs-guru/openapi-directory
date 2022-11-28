from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortTemplatesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortTemplatesUpdateRequest:
    path_params: DcimRearPortTemplatesUpdatePathParams = field()
    request: shared.WritableRearPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortTemplatesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rear_port_template: Optional[shared.RearPortTemplate] = field(default=None)
    
