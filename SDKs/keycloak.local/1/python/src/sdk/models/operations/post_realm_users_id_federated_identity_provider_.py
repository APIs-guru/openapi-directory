from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmUsersIDFederatedIdentityProviderPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDFederatedIdentityProviderRequest:
    path_params: PostRealmUsersIDFederatedIdentityProviderPathParams = field()
    request: shared.FederatedIdentityRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmUsersIDFederatedIdentityProviderResponse:
    content_type: str = field()
    status_code: int = field()
    
