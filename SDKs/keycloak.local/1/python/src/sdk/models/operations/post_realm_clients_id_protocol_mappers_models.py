from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientsIDProtocolMappersModelsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDProtocolMappersModelsRequest:
    path_params: PostRealmClientsIDProtocolMappersModelsPathParams = field(default=None)
    request: shared.ProtocolMapperRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDProtocolMappersModelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
