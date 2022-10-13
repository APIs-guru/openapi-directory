from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostQueriesIDRetrievePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostQueriesIDRetrieveRequests:
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_plain: bytes = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostQueriesIDRetrieveRequest:
    path_params: PostQueriesIDRetrievePathParams = field(default=None)
    request: Optional[PostQueriesIDRetrieveRequests] = field(default=None)
    

@dataclass
class PostQueriesIDRetrieveResponse:
    content_type: str = field(default=None)
    post_queries_id_retrieve_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
