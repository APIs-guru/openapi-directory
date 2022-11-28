from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmIdentityProviderInstancesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmIdentityProviderInstancesRequest:
    path_params: PostRealmIdentityProviderInstancesPathParams = field()
    request: shared.IdentityProviderRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmIdentityProviderInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    
