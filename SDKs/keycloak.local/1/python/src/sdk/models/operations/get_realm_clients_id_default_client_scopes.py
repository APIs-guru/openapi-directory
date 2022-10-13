from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDDefaultClientScopesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDDefaultClientScopesRequest:
    path_params: GetRealmClientsIDDefaultClientScopesPathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDDefaultClientScopesResponse:
    client_scope_representations: Optional[List[shared.ClientScopeRepresentation]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
