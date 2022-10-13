from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSchedulesDirectCountriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSchedulesDirectCountriesRequest:
    security: GetSchedulesDirectCountriesSecurity = field(default=None)
    

@dataclass
class GetSchedulesDirectCountriesResponse:
    content_type: str = field(default=None)
    get_schedules_direct_countries_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
