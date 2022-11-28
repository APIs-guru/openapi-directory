from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ServicesIDCalendarPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ServicesIDCalendarQueryParams:
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1ServicesIDCalendarRequest:
    path_params: GetSetupV1ServicesIDCalendarPathParams = field()
    query_params: GetSetupV1ServicesIDCalendarQueryParams = field()
    

@dataclass
class GetSetupV1ServicesIDCalendarResponse:
    content_type: str = field()
    status_code: int = field()
    service_calendar_view_model: Optional[shared.ServiceCalendarViewModel] = field(default=None)
    
