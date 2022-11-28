from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmGroupsIDRoleMappingsClientsClientCompositePathParams:
    client: str = field(metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmGroupsIDRoleMappingsClientsClientCompositeRequest:
    path_params: GetRealmGroupsIDRoleMappingsClientsClientCompositePathParams = field()
    

@dataclass
class GetRealmGroupsIDRoleMappingsClientsClientCompositeResponse:
    content_type: str = field()
    status_code: int = field()
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    
