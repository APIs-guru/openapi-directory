from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRegionsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRegionsPartialUpdateRequest:
    path_params: DcimRegionsPartialUpdatePathParams = field()
    request: shared.WritableRegionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRegionsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    region: Optional[shared.Region] = field(default=None)
    
