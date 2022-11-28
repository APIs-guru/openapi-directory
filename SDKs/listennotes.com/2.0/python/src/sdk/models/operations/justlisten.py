from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class JustListenHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class JustListenRequest:
    headers: JustListenHeaders = field()
    

@dataclass
class JustListenResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    episode_simple: Optional[shared.EpisodeSimple] = field(default=None)
    
