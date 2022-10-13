from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionOrganizationRevisionListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationRevisionListRequest:
    query_params: GetActionOrganizationRevisionListQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationRevisionListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
