from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDFindPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDFindRequest:
    path_params: PostModalitiesIDFindPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDFindResponse:
    content_type: str = field()
    status_code: int = field()
    post_modalities_id_find_200_application_json_any: Optional[Any] = field(default=None)
    
