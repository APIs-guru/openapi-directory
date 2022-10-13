from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmIdentityProviderInstancesAliasMappersPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmIdentityProviderInstancesAliasMappersRequest:
    path_params: PostRealmIdentityProviderInstancesAliasMappersPathParams = field(default=None)
    request: shared.IdentityProviderMapperRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmIdentityProviderInstancesAliasMappersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
