from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRegionsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRegionsPartialUpdateRequest:
    path_params: DcimRegionsPartialUpdatePathParams = field(default=None)
    request: shared.WritableRegion = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRegionsPartialUpdateResponse:
    content_type: str = field(default=None)
    region: Optional[shared.Region] = field(default=None)
    status_code: int = field(default=None)
    
