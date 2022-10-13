from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPlatformsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPlatformsUpdateRequest:
    path_params: DcimPlatformsUpdatePathParams = field(default=None)
    request: shared.WritablePlatform = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPlatformsUpdateResponse:
    content_type: str = field(default=None)
    platform: Optional[shared.Platform] = field(default=None)
    status_code: int = field(default=None)
    
