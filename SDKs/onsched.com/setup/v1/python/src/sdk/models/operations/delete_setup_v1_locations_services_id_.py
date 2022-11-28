from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1LocationsServicesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsServicesIDRequest:
    path_params: DeleteSetupV1LocationsServicesIDPathParams = field()
    

@dataclass
class DeleteSetupV1LocationsServicesIDResponse:
    content_type: str = field()
    status_code: int = field()
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    
