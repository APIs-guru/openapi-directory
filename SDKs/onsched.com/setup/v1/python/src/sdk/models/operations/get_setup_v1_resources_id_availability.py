from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesIDAvailabilityPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcesIDAvailabilityRequest:
    path_params: GetSetupV1ResourcesIDAvailabilityPathParams = field(default=None)
    

@dataclass
class GetSetupV1ResourcesIDAvailabilityResponse:
    content_type: str = field(default=None)
    resource_availability_view_model: Optional[shared.ResourceAvailabilityViewModel] = field(default=None)
    status_code: int = field(default=None)
    
