from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSpotByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpotByIDRequest:
    path_params: GetSpotByIDPathParams = field()
    

@dataclass
class GetSpotByIDResponse:
    content_type: str = field()
    status_code: int = field()
    spot_get: Optional[shared.SpotGet] = field(default=None)
    
