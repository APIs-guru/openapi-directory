from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1LocationsIDDeleteimagePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsIDDeleteimageRequest:
    path_params: DeleteSetupV1LocationsIDDeleteimagePathParams = field()
    

@dataclass
class DeleteSetupV1LocationsIDDeleteimageResponse:
    content_type: str = field()
    status_code: int = field()
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    
