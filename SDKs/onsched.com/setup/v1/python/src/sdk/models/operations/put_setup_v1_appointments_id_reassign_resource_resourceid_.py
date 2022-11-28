from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = field(metadata={'path_param': { 'field_name': 'resourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDRequest:
    path_params: PutSetupV1AppointmentsIDReassignResourceResourceIDPathParams = field()
    

@dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDResponse:
    content_type: str = field()
    status_code: int = field()
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    
