from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStatusQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatusRequest:
    query_params: GetStatusQueryParams = field()
    

@dataclass
class GetStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_status_response: Optional[dict[str, Any]] = field(default=None)
    
