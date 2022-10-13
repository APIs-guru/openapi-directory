from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class JustListenHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class JustListenRequest:
    headers: JustListenHeaders = field(default=None)
    

@dataclass
class JustListenResponse:
    content_type: str = field(default=None)
    episode_simple: Optional[shared.EpisodeSimple] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
