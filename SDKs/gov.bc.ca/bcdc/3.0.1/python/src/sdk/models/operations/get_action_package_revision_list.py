from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionPackageRevisionListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageRevisionListRequest:
    query_params: GetActionPackageRevisionListQueryParams = field(default=None)
    

@dataclass
class GetActionPackageRevisionListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
