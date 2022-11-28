from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesIDAvailabilityPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcesIDAvailabilityRequests:
    availability_input_model: Optional[shared.AvailabilityInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    availability_input_model1: Optional[shared.AvailabilityInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    availability_input_model2: Optional[shared.AvailabilityInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    availability_input_model3: Optional[shared.AvailabilityInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ResourcesIDAvailabilityRequest:
    path_params: PutSetupV1ResourcesIDAvailabilityPathParams = field()
    request: Optional[PutSetupV1ResourcesIDAvailabilityRequests] = field(default=None)
    

@dataclass
class PutSetupV1ResourcesIDAvailabilityResponse:
    content_type: str = field()
    status_code: int = field()
    resource_availability_view_model: Optional[shared.ResourceAvailabilityViewModel] = field(default=None)
    
