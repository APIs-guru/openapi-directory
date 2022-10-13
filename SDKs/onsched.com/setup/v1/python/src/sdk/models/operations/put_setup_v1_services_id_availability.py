from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ServicesIDAvailabilityPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ServicesIDAvailabilityRequests:
    availability_input_model: Optional[shared.AvailabilityInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    availability_input_model1: Optional[shared.AvailabilityInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    availability_input_model2: Optional[shared.AvailabilityInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    availability_input_model3: Optional[shared.AvailabilityInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ServicesIDAvailabilityRequest:
    path_params: PutSetupV1ServicesIDAvailabilityPathParams = field(default=None)
    request: Optional[PutSetupV1ServicesIDAvailabilityRequests] = field(default=None)
    

@dataclass
class PutSetupV1ServicesIDAvailabilityResponse:
    content_type: str = field(default=None)
    service_availability_view_model: Optional[shared.ServiceAvailabilityViewModel] = field(default=None)
    status_code: int = field(default=None)
    
