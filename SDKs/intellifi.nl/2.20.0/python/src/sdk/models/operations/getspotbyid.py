from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSpotByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpotByIDRequest:
    path_params: GetSpotByIDPathParams = field(default=None)
    

@dataclass
class GetSpotByIDResponse:
    content_type: str = field(default=None)
    spot_get: Optional[shared.SpotGet] = field(default=None)
    status_code: int = field(default=None)
    
