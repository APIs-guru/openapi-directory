from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmGroupsIDRoleMappingsRealmPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmGroupsIDRoleMappingsRealmRequest:
    path_params: GetRealmGroupsIDRoleMappingsRealmPathParams = field()
    

@dataclass
class GetRealmGroupsIDRoleMappingsRealmResponse:
    content_type: str = field()
    status_code: int = field()
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    
