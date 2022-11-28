from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostRealmTestSMTPConnectionPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmTestSMTPConnectionRequest:
    path_params: PostRealmTestSMTPConnectionPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmTestSMTPConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    
