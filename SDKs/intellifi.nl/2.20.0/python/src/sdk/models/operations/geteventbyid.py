from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventByIDRequest:
    path_params: GetEventByIDPathParams = field(default=None)
    

@dataclass
class GetEventByIDResponse:
    content_type: str = field(default=None)
    event: Optional[shared.Event] = field(default=None)
    status_code: int = field(default=None)
    
