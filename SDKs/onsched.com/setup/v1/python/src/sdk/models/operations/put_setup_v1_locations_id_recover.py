from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1LocationsIDRecoverPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1LocationsIDRecoverRequest:
    path_params: PutSetupV1LocationsIDRecoverPathParams = field(default=None)
    

@dataclass
class PutSetupV1LocationsIDRecoverResponse:
    content_type: str = field(default=None)
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
