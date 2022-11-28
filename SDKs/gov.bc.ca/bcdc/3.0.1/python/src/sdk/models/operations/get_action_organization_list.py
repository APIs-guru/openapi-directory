from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationListRequest:
    query_params: GetActionOrganizationListQueryParams = field()
    

@dataclass
class GetActionOrganizationListResponse:
    content_type: str = field()
    status_code: int = field()
    
