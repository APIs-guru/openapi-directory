from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmIdentityProviderInstancesAliasMappersPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmIdentityProviderInstancesAliasMappersRequest:
    path_params: PostRealmIdentityProviderInstancesAliasMappersPathParams = field()
    request: shared.IdentityProviderMapperRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmIdentityProviderInstancesAliasMappersResponse:
    content_type: str = field()
    status_code: int = field()
    
