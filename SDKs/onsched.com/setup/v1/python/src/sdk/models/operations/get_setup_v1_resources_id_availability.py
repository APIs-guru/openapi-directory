from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesIDAvailabilityPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcesIDAvailabilityRequest:
    path_params: GetSetupV1ResourcesIDAvailabilityPathParams = field()
    

@dataclass
class GetSetupV1ResourcesIDAvailabilityResponse:
    content_type: str = field()
    status_code: int = field()
    resource_availability_view_model: Optional[shared.ResourceAvailabilityViewModel] = field(default=None)
    
