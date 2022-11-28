from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_container_id: str = field(metadata={'path_param': { 'field_name': 'roleContainerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedQueryParams:
    scope: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedRequest:
    path_params: GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedPathParams = field()
    query_params: GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedQueryParams = field()
    

@dataclass
class GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedResponse:
    content_type: str = field()
    status_code: int = field()
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    
