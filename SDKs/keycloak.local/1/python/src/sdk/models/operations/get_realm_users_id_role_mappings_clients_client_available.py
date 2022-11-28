from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDRoleMappingsClientsClientAvailablePathParams:
    client: str = field(metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDRoleMappingsClientsClientAvailableRequest:
    path_params: GetRealmUsersIDRoleMappingsClientsClientAvailablePathParams = field()
    

@dataclass
class GetRealmUsersIDRoleMappingsClientsClientAvailableResponse:
    content_type: str = field()
    status_code: int = field()
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    
