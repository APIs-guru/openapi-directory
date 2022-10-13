from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionTagListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionTagListRequest:
    query_params: GetActionTagListQueryParams = field(default=None)
    

@dataclass
class GetActionTagListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
