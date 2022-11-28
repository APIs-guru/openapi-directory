from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionPackageRevisionListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageRevisionListRequest:
    query_params: GetActionPackageRevisionListQueryParams = field()
    

@dataclass
class GetActionPackageRevisionListResponse:
    content_type: str = field()
    status_code: int = field()
    
