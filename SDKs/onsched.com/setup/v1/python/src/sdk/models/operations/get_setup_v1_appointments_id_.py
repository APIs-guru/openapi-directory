from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1AppointmentsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1AppointmentsIDRequest:
    path_params: GetSetupV1AppointmentsIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1AppointmentsIDResponse:
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
