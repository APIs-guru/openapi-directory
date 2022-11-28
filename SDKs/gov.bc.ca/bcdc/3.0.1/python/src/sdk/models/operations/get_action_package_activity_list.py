from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionPackageActivityListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageActivityListRequest:
    query_params: GetActionPackageActivityListQueryParams = field()
    

@dataclass
class GetActionPackageActivityListResponse:
    content_type: str = field()
    status_code: int = field()
    
