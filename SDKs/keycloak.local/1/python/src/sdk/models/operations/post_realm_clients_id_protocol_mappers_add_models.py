from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class PostRealmClientsIDProtocolMappersAddModelsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDProtocolMappersAddModelsRequest:
    path_params: PostRealmClientsIDProtocolMappersAddModelsPathParams = field()
    request: List[shared.ProtocolMapperRepresentation] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDProtocolMappersAddModelsResponse:
    content_type: str = field()
    status_code: int = field()
    
