from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostRealmAuthenticationRegisterRequiredActionPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationRegisterRequiredActionRequest:
    path_params: PostRealmAuthenticationRegisterRequiredActionPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationRegisterRequiredActionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
