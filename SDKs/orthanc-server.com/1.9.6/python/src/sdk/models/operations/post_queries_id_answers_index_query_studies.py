from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostQueriesIDAnswersIndexQueryStudiesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostQueriesIDAnswersIndexQueryStudiesRequest:
    path_params: PostQueriesIDAnswersIndexQueryStudiesPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostQueriesIDAnswersIndexQueryStudiesResponse:
    content_type: str = field(default=None)
    post_queries_id_answers_index_query_studies_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
