from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveNearEarthObjectByIDPathParams:
    asteroid_id: str = field(default=None, metadata={'path_param': { 'field_name': 'asteroid_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveNearEarthObjectByIDRequest:
    path_params: RetrieveNearEarthObjectByIDPathParams = field(default=None)
    

@dataclass
class RetrieveNearEarthObjectByIDResponse:
    content_type: str = field(default=None)
    near_earth_object: Optional[shared.NearEarthObject] = field(default=None)
    status_code: int = field(default=None)
    
