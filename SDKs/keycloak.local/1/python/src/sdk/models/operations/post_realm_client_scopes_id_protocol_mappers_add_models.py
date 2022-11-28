from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class PostRealmClientScopesIDProtocolMappersAddModelsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientScopesIDProtocolMappersAddModelsRequest:
    path_params: PostRealmClientScopesIDProtocolMappersAddModelsPathParams = field()
    request: List[shared.ProtocolMapperRepresentation] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientScopesIDProtocolMappersAddModelsResponse:
    content_type: str = field()
    status_code: int = field()
    
