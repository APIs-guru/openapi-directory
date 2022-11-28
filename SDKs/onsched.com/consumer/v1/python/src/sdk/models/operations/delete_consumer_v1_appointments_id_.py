from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteConsumerV1AppointmentsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConsumerV1AppointmentsIDRequest:
    path_params: DeleteConsumerV1AppointmentsIDPathParams = field()
    

@dataclass
class DeleteConsumerV1AppointmentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    
