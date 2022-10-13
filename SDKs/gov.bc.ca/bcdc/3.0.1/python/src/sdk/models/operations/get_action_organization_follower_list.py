from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionOrganizationFollowerListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationFollowerListRequest:
    query_params: GetActionOrganizationFollowerListQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationFollowerListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
