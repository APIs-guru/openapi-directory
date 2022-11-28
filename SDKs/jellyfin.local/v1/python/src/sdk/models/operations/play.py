from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PlayPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlayQueryParams:
    item_ids: List[str] = field(metadata={'query_param': { 'field_name': 'itemIds', 'style': 'form', 'explode': True }})
    play_command: shared.PlayCommandEnum = field(metadata={'query_param': { 'field_name': 'playCommand', 'style': 'form', 'explode': True }})
    start_position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startPositionTicks', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PlayRequest:
    path_params: PlayPathParams = field()
    query_params: PlayQueryParams = field()
    security: PlaySecurity = field()
    

@dataclass
class PlayResponse:
    content_type: str = field()
    status_code: int = field()
    
