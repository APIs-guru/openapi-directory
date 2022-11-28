from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchedulesDirectCountriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSchedulesDirectCountriesRequest:
    security: GetSchedulesDirectCountriesSecurity = field()
    

@dataclass
class GetSchedulesDirectCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    get_schedules_direct_countries_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
