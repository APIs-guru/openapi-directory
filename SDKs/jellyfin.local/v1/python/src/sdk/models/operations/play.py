from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class PlayPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayQueryParams:
    item_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'itemIds', 'style': 'form', 'explode': True }})
    play_command: shared.PlayCommandEnum = field(default=None, metadata={'query_param': { 'field_name': 'playCommand', 'style': 'form', 'explode': True }})
    start_position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startPositionTicks', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PlayRequest:
    path_params: PlayPathParams = field(default=None)
    query_params: PlayQueryParams = field(default=None)
    security: PlaySecurity = field(default=None)
    

@dataclass
class PlayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
