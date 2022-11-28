from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmDefaultDefaultClientScopesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmDefaultDefaultClientScopesRequest:
    path_params: GetRealmDefaultDefaultClientScopesPathParams = field()
    

@dataclass
class GetRealmDefaultDefaultClientScopesResponse:
    content_type: str = field()
    status_code: int = field()
    client_scope_representations: Optional[List[shared.ClientScopeRepresentation]] = field(default=None)
    
