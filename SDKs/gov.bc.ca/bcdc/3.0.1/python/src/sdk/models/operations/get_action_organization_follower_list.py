from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationFollowerListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationFollowerListRequest:
    query_params: GetActionOrganizationFollowerListQueryParams = field()
    

@dataclass
class GetActionOrganizationFollowerListResponse:
    content_type: str = field()
    status_code: int = field()
    
