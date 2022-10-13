from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionPackageListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageListRequest:
    query_params: GetActionPackageListQueryParams = field(default=None)
    

@dataclass
class GetActionPackageListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
