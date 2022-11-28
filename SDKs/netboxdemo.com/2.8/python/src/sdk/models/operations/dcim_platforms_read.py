from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPlatformsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPlatformsReadRequest:
    path_params: DcimPlatformsReadPathParams = field()
    

@dataclass
class DcimPlatformsReadResponse:
    content_type: str = field()
    status_code: int = field()
    platform: Optional[shared.Platform] = field(default=None)
    
