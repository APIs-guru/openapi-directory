from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPresenceByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPresenceByIDRequest:
    path_params: GetPresenceByIDPathParams = field(default=None)
    

@dataclass
class GetPresenceByIDResponse:
    content_type: str = field(default=None)
    presence: Optional[shared.Presence] = field(default=None)
    status_code: int = field(default=None)
    
