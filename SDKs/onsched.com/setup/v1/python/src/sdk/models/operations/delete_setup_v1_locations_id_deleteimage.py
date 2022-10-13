from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1LocationsIDDeleteimagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsIDDeleteimageRequest:
    path_params: DeleteSetupV1LocationsIDDeleteimagePathParams = field(default=None)
    

@dataclass
class DeleteSetupV1LocationsIDDeleteimageResponse:
    content_type: str = field(default=None)
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
