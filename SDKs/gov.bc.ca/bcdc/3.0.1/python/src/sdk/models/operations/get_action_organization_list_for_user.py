from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionOrganizationListForUserQueryParams:
    permission: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'permission', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationListForUserRequest:
    query_params: GetActionOrganizationListForUserQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationListForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
