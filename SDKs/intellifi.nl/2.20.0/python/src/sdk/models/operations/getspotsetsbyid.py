from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSpotSetsByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpotSetsByIDRequest:
    path_params: GetSpotSetsByIDPathParams = field()
    

@dataclass
class GetSpotSetsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    spot_set: Optional[shared.SpotSet] = field(default=None)
    
