from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionOrganizationActivityListQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationActivityListRequest:
    query_params: GetActionOrganizationActivityListQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationActivityListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
