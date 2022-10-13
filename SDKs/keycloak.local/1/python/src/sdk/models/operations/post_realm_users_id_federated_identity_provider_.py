from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmUsersIDFederatedIdentityProviderPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDFederatedIdentityProviderRequest:
    path_params: PostRealmUsersIDFederatedIdentityProviderPathParams = field(default=None)
    request: shared.FederatedIdentityRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmUsersIDFederatedIdentityProviderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
