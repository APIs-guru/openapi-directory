from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ServicesIDAvailabilityPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ServicesIDAvailabilityRequest:
    path_params: GetSetupV1ServicesIDAvailabilityPathParams = field(default=None)
    

@dataclass
class GetSetupV1ServicesIDAvailabilityResponse:
    content_type: str = field(default=None)
    service_availability_view_model: Optional[shared.ServiceAvailabilityViewModel] = field(default=None)
    status_code: int = field(default=None)
    
