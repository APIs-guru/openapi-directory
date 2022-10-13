from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedPathParams:
    closed: bool = field(default=None, metadata={'path_param': { 'field_name': 'closed', 'style': 'simple', 'explode': False }})
    holiday_id: str = field(default=None, metadata={'path_param': { 'field_name': 'holidayId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest:
    path_params: PutSetupV1LocationsIDHolidaysHolidayIDClosedPathParams = field(default=None)
    

@dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse:
    content_type: str = field(default=None)
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
