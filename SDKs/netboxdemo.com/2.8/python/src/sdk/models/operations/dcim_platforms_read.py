from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPlatformsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPlatformsReadRequest:
    path_params: DcimPlatformsReadPathParams = field(default=None)
    

@dataclass
class DcimPlatformsReadResponse:
    content_type: str = field(default=None)
    platform: Optional[shared.Platform] = field(default=None)
    status_code: int = field(default=None)
    
