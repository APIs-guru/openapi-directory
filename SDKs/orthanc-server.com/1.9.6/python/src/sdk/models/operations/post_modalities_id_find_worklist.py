from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDFindWorklistPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDFindWorklistRequest:
    path_params: PostModalitiesIDFindWorklistPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDFindWorklistResponse:
    content_type: str = field(default=None)
    post_modalities_id_find_worklist_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
