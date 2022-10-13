from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRegionsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRegionsUpdateRequest:
    path_params: DcimRegionsUpdatePathParams = field(default=None)
    request: shared.WritableRegion = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRegionsUpdateResponse:
    content_type: str = field(default=None)
    region: Optional[shared.Region] = field(default=None)
    status_code: int = field(default=None)
    
