from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesIDReassignAppointmentsResourceIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcesIDReassignAppointmentsResourceIDQueryParams:
    calendar_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'calendarId', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest:
    path_params: PutSetupV1ResourcesIDReassignAppointmentsResourceIDPathParams = field(default=None)
    query_params: PutSetupV1ResourcesIDReassignAppointmentsResourceIDQueryParams = field(default=None)
    

@dataclass
class PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse:
    appointment_view_models: Optional[List[shared.AppointmentViewModel]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
