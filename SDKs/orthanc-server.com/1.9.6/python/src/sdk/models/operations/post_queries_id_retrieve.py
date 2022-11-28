from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostQueriesIDRetrievePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostQueriesIDRetrieveRequests:
    text_plain: bytes = field(metadata={'request': { 'media_type': 'text/plain' }})
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostQueriesIDRetrieveRequest:
    path_params: PostQueriesIDRetrievePathParams = field()
    request: Optional[PostQueriesIDRetrieveRequests] = field(default=None)
    

@dataclass
class PostQueriesIDRetrieveResponse:
    content_type: str = field()
    status_code: int = field()
    post_queries_id_retrieve_200_application_json_any: Optional[Any] = field(default=None)
    
