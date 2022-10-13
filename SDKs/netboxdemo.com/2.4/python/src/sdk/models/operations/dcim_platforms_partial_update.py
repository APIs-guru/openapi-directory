from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPlatformsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPlatformsPartialUpdateRequest:
    path_params: DcimPlatformsPartialUpdatePathParams = field(default=None)
    request: shared.WritablePlatform = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPlatformsPartialUpdateResponse:
    content_type: str = field(default=None)
    platform: Optional[shared.Platform] = field(default=None)
    status_code: int = field(default=None)
    
