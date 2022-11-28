from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1AppointmentsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1AppointmentsIDRequest:
    path_params: GetConsumerV1AppointmentsIDPathParams = field()
    

@dataclass
class GetConsumerV1AppointmentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    
