from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLocationByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLocationByIDRequest:
    path_params: GetLocationByIDPathParams = field()
    

@dataclass
class GetLocationByIDResponse:
    content_type: str = field()
    status_code: int = field()
    location: Optional[shared.Location] = field(default=None)
    
