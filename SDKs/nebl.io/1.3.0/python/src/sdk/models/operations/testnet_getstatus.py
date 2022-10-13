from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class TestnetGetStatusQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class TestnetGetStatusRequest:
    query_params: TestnetGetStatusQueryParams = field(default=None)
    

@dataclass
class TestnetGetStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_status_response: Optional[dict[str, Any]] = field(default=None)
    
