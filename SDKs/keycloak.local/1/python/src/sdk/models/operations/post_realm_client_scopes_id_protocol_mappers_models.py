from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientScopesIDProtocolMappersModelsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientScopesIDProtocolMappersModelsRequest:
    path_params: PostRealmClientScopesIDProtocolMappersModelsPathParams = field(default=None)
    request: shared.ProtocolMapperRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientScopesIDProtocolMappersModelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
