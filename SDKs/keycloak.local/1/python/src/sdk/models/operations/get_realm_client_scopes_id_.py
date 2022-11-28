from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientScopesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientScopesIDRequest:
    path_params: GetRealmClientScopesIDPathParams = field()
    

@dataclass
class GetRealmClientScopesIDResponse:
    content_type: str = field()
    status_code: int = field()
    client_scope_representation: Optional[shared.ClientScopeRepresentation] = field(default=None)
    
