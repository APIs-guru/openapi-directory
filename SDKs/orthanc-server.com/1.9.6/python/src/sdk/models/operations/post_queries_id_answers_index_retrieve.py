from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostQueriesIDAnswersIndexRetrievePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostQueriesIDAnswersIndexRetrieveRequests:
    text_plain: bytes = field(metadata={'request': { 'media_type': 'text/plain' }})
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostQueriesIDAnswersIndexRetrieveRequest:
    path_params: PostQueriesIDAnswersIndexRetrievePathParams = field()
    request: Optional[PostQueriesIDAnswersIndexRetrieveRequests] = field(default=None)
    

@dataclass
class PostQueriesIDAnswersIndexRetrieveResponse:
    content_type: str = field()
    status_code: int = field()
    post_queries_id_answers_index_retrieve_200_application_json_any: Optional[Any] = field(default=None)
    
