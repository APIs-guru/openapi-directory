from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPlatformsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPlatformsUpdateRequest:
    path_params: DcimPlatformsUpdatePathParams = field()
    request: shared.WritablePlatformInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPlatformsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    platform: Optional[shared.Platform] = field(default=None)
    
