from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIIndexTermIndexTermIDPathParams:
    index_term_id: int = field(metadata={'path_param': { 'field_name': 'indexTermId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIIndexTermIndexTermIDRequest:
    path_params: GetAPIIndexTermIndexTermIDPathParams = field()
    

@dataclass
class GetAPIIndexTermIndexTermIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    erskine_may_index_term: Optional[shared.ErskineMayIndexTerm] = field(default=None)
    
