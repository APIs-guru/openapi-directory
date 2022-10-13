from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDRequest:
    path_params: PutSetupV1AppointmentsIDReassignResourceResourceIDPathParams = field(default=None)
    

@dataclass
class PutSetupV1AppointmentsIDReassignResourceResourceIDResponse:
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
