from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1LocationsIDRecoverPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1LocationsIDRecoverRequest:
    path_params: PutSetupV1LocationsIDRecoverPathParams = field()
    

@dataclass
class PutSetupV1LocationsIDRecoverResponse:
    content_type: str = field()
    status_code: int = field()
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    
