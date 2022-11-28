from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutConsumerV1AppointmentsIDReschedulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1AppointmentsIDRescheduleRequests:
    appointment_reschedule_model: Optional[shared.AppointmentRescheduleModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_reschedule_model1: Optional[shared.AppointmentRescheduleModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_reschedule_model2: Optional[shared.AppointmentRescheduleModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_reschedule_model3: Optional[shared.AppointmentRescheduleModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutConsumerV1AppointmentsIDRescheduleRequest:
    path_params: PutConsumerV1AppointmentsIDReschedulePathParams = field()
    request: Optional[PutConsumerV1AppointmentsIDRescheduleRequests] = field(default=None)
    

@dataclass
class PutConsumerV1AppointmentsIDRescheduleResponse:
    content_type: str = field()
    status_code: int = field()
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    
