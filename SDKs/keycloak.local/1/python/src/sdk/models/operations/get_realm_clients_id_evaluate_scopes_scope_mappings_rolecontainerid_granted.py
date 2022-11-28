from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_container_id: str = field(metadata={'path_param': { 'field_name': 'roleContainerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedQueryParams:
    scope: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedRequest:
    path_params: GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedPathParams = field()
    query_params: GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedQueryParams = field()
    

@dataclass
class GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedResponse:
    content_type: str = field()
    status_code: int = field()
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    
