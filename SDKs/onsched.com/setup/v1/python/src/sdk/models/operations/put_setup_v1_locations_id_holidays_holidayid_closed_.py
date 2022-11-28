from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedPathParams:
    closed: bool = field(metadata={'path_param': { 'field_name': 'closed', 'style': 'simple', 'explode': False }})
    holiday_id: str = field(metadata={'path_param': { 'field_name': 'holidayId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest:
    path_params: PutSetupV1LocationsIDHolidaysHolidayIDClosedPathParams = field()
    

@dataclass
class PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse:
    content_type: str = field()
    status_code: int = field()
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    
