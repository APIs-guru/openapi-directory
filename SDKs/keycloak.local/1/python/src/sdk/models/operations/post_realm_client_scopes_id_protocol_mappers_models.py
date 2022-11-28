from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientScopesIDProtocolMappersModelsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientScopesIDProtocolMappersModelsRequest:
    path_params: PostRealmClientScopesIDProtocolMappersModelsPathParams = field()
    request: shared.ProtocolMapperRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientScopesIDProtocolMappersModelsResponse:
    content_type: str = field()
    status_code: int = field()
    
