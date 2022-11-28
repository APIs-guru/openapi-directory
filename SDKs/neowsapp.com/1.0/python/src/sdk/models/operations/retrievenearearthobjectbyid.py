from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveNearEarthObjectByIDPathParams:
    asteroid_id: str = field(metadata={'path_param': { 'field_name': 'asteroid_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveNearEarthObjectByIDRequest:
    path_params: RetrieveNearEarthObjectByIDPathParams = field()
    

@dataclass
class RetrieveNearEarthObjectByIDResponse:
    content_type: str = field()
    status_code: int = field()
    near_earth_object: Optional[shared.NearEarthObject] = field(default=None)
    
