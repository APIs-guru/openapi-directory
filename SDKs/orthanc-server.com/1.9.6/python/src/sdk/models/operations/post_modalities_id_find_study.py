from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDFindStudyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDFindStudyRequest:
    path_params: PostModalitiesIDFindStudyPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDFindStudyResponse:
    content_type: str = field()
    status_code: int = field()
    post_modalities_id_find_study_200_application_json_any: Optional[Any] = field(default=None)
    
