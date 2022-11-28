from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPlatformsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPlatformsPartialUpdateRequest:
    path_params: DcimPlatformsPartialUpdatePathParams = field()
    request: shared.WritablePlatformInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPlatformsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    platform: Optional[shared.Platform] = field(default=None)
    
