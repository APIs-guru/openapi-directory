from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostRealmAuthenticationFlowsFlowAliasCopyPathParams:
    flow_alias: str = field(default=None, metadata={'path_param': { 'field_name': 'flowAlias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationFlowsFlowAliasCopyRequest:
    path_params: PostRealmAuthenticationFlowsFlowAliasCopyPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationFlowsFlowAliasCopyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
