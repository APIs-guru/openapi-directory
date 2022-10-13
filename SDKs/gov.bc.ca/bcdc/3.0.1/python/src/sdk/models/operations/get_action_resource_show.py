from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionResourceShowQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_tracking: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_tracking', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionResourceShowRequest:
    query_params: GetActionResourceShowQueryParams = field(default=None)
    

@dataclass
class GetActionResourceShowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
