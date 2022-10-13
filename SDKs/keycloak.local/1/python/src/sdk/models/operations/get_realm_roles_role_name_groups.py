from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmRolesRoleNameGroupsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(default=None, metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesRoleNameGroupsQueryParams:
    brief_representation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'briefRepresentation', 'style': 'form', 'explode': True }})
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmRolesRoleNameGroupsRequest:
    path_params: GetRealmRolesRoleNameGroupsPathParams = field(default=None)
    query_params: GetRealmRolesRoleNameGroupsQueryParams = field(default=None)
    

@dataclass
class GetRealmRolesRoleNameGroupsResponse:
    content_type: str = field(default=None)
    group_representations: Optional[List[shared.GroupRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
