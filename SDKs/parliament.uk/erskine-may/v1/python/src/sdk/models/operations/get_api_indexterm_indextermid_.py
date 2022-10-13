from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIIndexTermIndexTermIDPathParams:
    index_term_id: int = field(default=None, metadata={'path_param': { 'field_name': 'indexTermId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIIndexTermIndexTermIDRequest:
    path_params: GetAPIIndexTermIndexTermIDPathParams = field(default=None)
    

@dataclass
class GetAPIIndexTermIndexTermIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_index_term: Optional[shared.ErskineMayIndexTerm] = field(default=None)
    status_code: int = field(default=None)
    
