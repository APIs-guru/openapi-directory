from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientDescriptionConverterPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientDescriptionConverterRequest:
    path_params: PostRealmClientDescriptionConverterPathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostRealmClientDescriptionConverterResponse:
    content_type: str = field()
    status_code: int = field()
    client_representation: Optional[shared.ClientRepresentation] = field(default=None)
    
