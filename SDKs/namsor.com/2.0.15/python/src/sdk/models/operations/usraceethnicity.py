from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsRaceEthnicityPathParams:
    first_name: str = field(default=None, metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(default=None, metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsRaceEthnicitySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsRaceEthnicityRequest:
    path_params: UsRaceEthnicityPathParams = field(default=None)
    security: UsRaceEthnicitySecurity = field(default=None)
    

@dataclass
class UsRaceEthnicityResponse:
    content_type: str = field(default=None)
    first_last_name_us_race_ethnicity_out: Optional[shared.FirstLastNameUsRaceEthnicityOut] = field(default=None)
    status_code: int = field(default=None)
    
