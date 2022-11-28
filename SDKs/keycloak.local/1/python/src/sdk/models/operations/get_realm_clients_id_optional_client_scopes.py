from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDOptionalClientScopesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDOptionalClientScopesRequest:
    path_params: GetRealmClientsIDOptionalClientScopesPathParams = field()
    

@dataclass
class GetRealmClientsIDOptionalClientScopesResponse:
    content_type: str = field()
    status_code: int = field()
    client_scope_representations: Optional[List[shared.ClientScopeRepresentation]] = field(default=None)
    
