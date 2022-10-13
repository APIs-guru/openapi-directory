from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmRolesByIDRoleIDCompositesClientsClientPathParams:
    client: str = field(default=None, metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(default=None, metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesByIDRoleIDCompositesClientsClientRequest:
    path_params: GetRealmRolesByIDRoleIDCompositesClientsClientPathParams = field(default=None)
    

@dataclass
class GetRealmRolesByIDRoleIDCompositesClientsClientResponse:
    content_type: str = field(default=None)
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
