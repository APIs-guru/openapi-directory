from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutConsumerV1AppointmentsIDCancelPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1AppointmentsIDCancelRequest:
    path_params: PutConsumerV1AppointmentsIDCancelPathParams = field()
    

@dataclass
class PutConsumerV1AppointmentsIDCancelResponse:
    content_type: str = field()
    status_code: int = field()
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    
