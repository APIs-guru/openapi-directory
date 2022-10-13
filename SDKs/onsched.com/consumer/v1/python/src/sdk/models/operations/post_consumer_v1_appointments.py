from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostConsumerV1AppointmentsQueryParams:
    complete_booking: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'completeBooking', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConsumerV1AppointmentsRequests:
    appointment_initial_model: Optional[shared.AppointmentInitialModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_initial_model1: Optional[shared.AppointmentInitialModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_initial_model2: Optional[shared.AppointmentInitialModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_initial_model3: Optional[shared.AppointmentInitialModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostConsumerV1AppointmentsRequest:
    query_params: PostConsumerV1AppointmentsQueryParams = field(default=None)
    request: Optional[PostConsumerV1AppointmentsRequests] = field(default=None)
    

@dataclass
class PostConsumerV1AppointmentsResponse:
    appointment_initial_view_model: Optional[shared.AppointmentInitialViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
