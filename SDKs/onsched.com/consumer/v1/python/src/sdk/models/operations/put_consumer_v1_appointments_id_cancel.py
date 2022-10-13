from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutConsumerV1AppointmentsIDCancelPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1AppointmentsIDCancelRequest:
    path_params: PutConsumerV1AppointmentsIDCancelPathParams = field(default=None)
    

@dataclass
class PutConsumerV1AppointmentsIDCancelResponse:
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
