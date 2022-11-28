from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationListForUserQueryParams:
    permission: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'permission', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationListForUserRequest:
    query_params: GetActionOrganizationListForUserQueryParams = field()
    

@dataclass
class GetActionOrganizationListForUserResponse:
    content_type: str = field()
    status_code: int = field()
    
