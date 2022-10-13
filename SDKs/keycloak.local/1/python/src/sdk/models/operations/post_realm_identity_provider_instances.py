from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmIdentityProviderInstancesPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmIdentityProviderInstancesRequest:
    path_params: PostRealmIdentityProviderInstancesPathParams = field(default=None)
    request: shared.IdentityProviderRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmIdentityProviderInstancesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
