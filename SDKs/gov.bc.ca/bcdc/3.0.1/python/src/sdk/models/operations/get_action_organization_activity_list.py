from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationActivityListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationActivityListRequest:
    query_params: GetActionOrganizationActivityListQueryParams = field()
    

@dataclass
class GetActionOrganizationActivityListResponse:
    content_type: str = field()
    status_code: int = field()
    
