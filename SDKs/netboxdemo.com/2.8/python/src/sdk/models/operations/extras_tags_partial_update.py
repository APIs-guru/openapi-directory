from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTagsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTagsPartialUpdateRequest:
    path_params: ExtrasTagsPartialUpdatePathParams = field(default=None)
    request: shared.Tag = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTagsPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
