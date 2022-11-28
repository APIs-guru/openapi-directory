from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPresenceByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPresenceByIDRequest:
    path_params: GetPresenceByIDPathParams = field()
    

@dataclass
class GetPresenceByIDResponse:
    content_type: str = field()
    status_code: int = field()
    presence: Optional[shared.Presence] = field(default=None)
    
