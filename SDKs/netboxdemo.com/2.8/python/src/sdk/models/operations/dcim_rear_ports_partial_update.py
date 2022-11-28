from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortsPartialUpdateRequest:
    path_params: DcimRearPortsPartialUpdatePathParams = field()
    request: shared.WritableRearPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rear_port: Optional[shared.RearPort] = field(default=None)
    
