from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmDefaultOptionalClientScopesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmDefaultOptionalClientScopesRequest:
    path_params: GetRealmDefaultOptionalClientScopesPathParams = field()
    

@dataclass
class GetRealmDefaultOptionalClientScopesResponse:
    content_type: str = field()
    status_code: int = field()
    client_scope_representations: Optional[List[shared.ClientScopeRepresentation]] = field(default=None)
    
