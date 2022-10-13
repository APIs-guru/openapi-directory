from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDFindStudyPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDFindStudyRequest:
    path_params: PostModalitiesIDFindStudyPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDFindStudyResponse:
    content_type: str = field(default=None)
    post_modalities_id_find_study_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
