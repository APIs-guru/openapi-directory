from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRegionsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRegionsUpdateRequest:
    path_params: DcimRegionsUpdatePathParams = field()
    request: shared.WritableRegionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRegionsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    region: Optional[shared.Region] = field(default=None)
    
