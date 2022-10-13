from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSpotSetByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    set_id: str = field(default=None, metadata={'path_param': { 'field_name': 'setId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpotSetByIDRequest:
    path_params: GetSpotSetByIDPathParams = field(default=None)
    

@dataclass
class GetSpotSetByIDResponse:
    content_type: str = field(default=None)
    spot_set: Optional[shared.SpotSet] = field(default=None)
    status_code: int = field(default=None)
    
