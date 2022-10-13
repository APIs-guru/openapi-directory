from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1AppointmentsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1AppointmentsIDRequest:
    path_params: GetConsumerV1AppointmentsIDPathParams = field(default=None)
    

@dataclass
class GetConsumerV1AppointmentsIDResponse:
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
