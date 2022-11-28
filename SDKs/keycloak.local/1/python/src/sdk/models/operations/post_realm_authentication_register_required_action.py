from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostRealmAuthenticationRegisterRequiredActionPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationRegisterRequiredActionRequest:
    path_params: PostRealmAuthenticationRegisterRequiredActionPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationRegisterRequiredActionResponse:
    content_type: str = field()
    status_code: int = field()
    
