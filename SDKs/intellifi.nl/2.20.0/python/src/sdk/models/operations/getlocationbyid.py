from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLocationByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLocationByIDRequest:
    path_params: GetLocationByIDPathParams = field(default=None)
    

@dataclass
class GetLocationByIDResponse:
    content_type: str = field(default=None)
    location: Optional[shared.Location] = field(default=None)
    status_code: int = field(default=None)
    
