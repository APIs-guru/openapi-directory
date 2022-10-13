from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTagsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTagsUpdateRequest:
    path_params: ExtrasTagsUpdatePathParams = field(default=None)
    request: shared.Tag = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTagsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
