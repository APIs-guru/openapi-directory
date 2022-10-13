from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDRolesRoleNameGroupsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(default=None, metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDRolesRoleNameGroupsQueryParams:
    brief_representation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'briefRepresentation', 'style': 'form', 'explode': True }})
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmClientsIDRolesRoleNameGroupsRequest:
    path_params: GetRealmClientsIDRolesRoleNameGroupsPathParams = field(default=None)
    query_params: GetRealmClientsIDRolesRoleNameGroupsQueryParams = field(default=None)
    

@dataclass
class GetRealmClientsIDRolesRoleNameGroupsResponse:
    content_type: str = field(default=None)
    group_representations: Optional[List[shared.GroupRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
