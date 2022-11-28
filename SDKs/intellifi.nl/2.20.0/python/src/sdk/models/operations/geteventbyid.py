from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventByIDRequest:
    path_params: GetEventByIDPathParams = field()
    

@dataclass
class GetEventByIDResponse:
    content_type: str = field()
    status_code: int = field()
    event: Optional[shared.Event] = field(default=None)
    
