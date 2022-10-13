from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDScopeMappingsClientsClientAvailablePathParams:
    client: str = field(default=None, metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDScopeMappingsClientsClientAvailableRequest:
    path_params: GetRealmClientsIDScopeMappingsClientsClientAvailablePathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDScopeMappingsClientsClientAvailableResponse:
    content_type: str = field(default=None)
    role_representations: Optional[List[shared.RoleRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
