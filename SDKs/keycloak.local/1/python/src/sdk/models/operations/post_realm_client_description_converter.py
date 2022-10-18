from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientDescriptionConverterPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientDescriptionConverterRequest:
    path_params: PostRealmClientDescriptionConverterPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostRealmClientDescriptionConverterResponse:
    client_representation: Optional[shared.ClientRepresentation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
