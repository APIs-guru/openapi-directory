from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmDefaultDefaultClientScopesPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmDefaultDefaultClientScopesRequest:
    path_params: GetRealmDefaultDefaultClientScopesPathParams = field(default=None)
    

@dataclass
class GetRealmDefaultDefaultClientScopesResponse:
    client_scope_representations: Optional[List[shared.ClientScopeRepresentation]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
