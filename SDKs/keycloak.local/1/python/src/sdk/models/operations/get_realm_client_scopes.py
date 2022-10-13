from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientScopesPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientScopesRequest:
    path_params: GetRealmClientScopesPathParams = field(default=None)
    

@dataclass
class GetRealmClientScopesResponse:
    client_scope_representations: Optional[List[shared.ClientScopeRepresentation]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
