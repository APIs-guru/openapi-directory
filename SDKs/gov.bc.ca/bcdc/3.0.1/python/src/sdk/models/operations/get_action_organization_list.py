from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionOrganizationListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationListRequest:
    query_params: GetActionOrganizationListQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
