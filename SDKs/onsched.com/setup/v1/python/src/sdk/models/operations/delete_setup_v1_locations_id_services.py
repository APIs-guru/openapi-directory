from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1LocationsIDServicesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsIDServicesRequest:
    path_params: DeleteSetupV1LocationsIDServicesPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1LocationsIDServicesResponse:
    content_type: str = field(default=None)
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
