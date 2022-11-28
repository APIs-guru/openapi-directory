from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSpotListByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpotListByIDRequest:
    path_params: GetSpotListByIDPathParams = field()
    

@dataclass
class GetSpotListByIDResponse:
    content_type: str = field()
    status_code: int = field()
    spot_list: Optional[shared.SpotList] = field(default=None)
    
