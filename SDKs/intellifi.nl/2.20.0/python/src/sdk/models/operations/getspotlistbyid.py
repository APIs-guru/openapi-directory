from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSpotListByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpotListByIDRequest:
    path_params: GetSpotListByIDPathParams = field(default=None)
    

@dataclass
class GetSpotListByIDResponse:
    content_type: str = field(default=None)
    spot_list: Optional[shared.SpotList] = field(default=None)
    status_code: int = field(default=None)
    
