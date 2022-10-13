from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmRolesRoleNameUsersPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(default=None, metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesRoleNameUsersQueryParams:
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmRolesRoleNameUsersRequest:
    path_params: GetRealmRolesRoleNameUsersPathParams = field(default=None)
    query_params: GetRealmRolesRoleNameUsersQueryParams = field(default=None)
    

@dataclass
class GetRealmRolesRoleNameUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_representations: Optional[List[shared.UserRepresentation]] = field(default=None)
    
