from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDRolesRoleNameCompositesClientsClientPathParams:
    client: str = field(metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDRolesRoleNameCompositesClientsClientRequest:
    path_params: GetRealmClientsIDRolesRoleNameCompositesClientsClientPathParams = field()
    

@dataclass
class GetRealmClientsIDRolesRoleNameCompositesClientsClientResponse:
    content_type: str = field()
    status_code: int = field()
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    
