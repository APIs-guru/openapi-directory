from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostQueriesIDAnswersIndexRetrievePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostQueriesIDAnswersIndexRetrieveRequests:
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_plain: bytes = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostQueriesIDAnswersIndexRetrieveRequest:
    path_params: PostQueriesIDAnswersIndexRetrievePathParams = field(default=None)
    request: Optional[PostQueriesIDAnswersIndexRetrieveRequests] = field(default=None)
    

@dataclass
class PostQueriesIDAnswersIndexRetrieveResponse:
    content_type: str = field(default=None)
    post_queries_id_answers_index_retrieve_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
