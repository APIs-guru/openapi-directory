from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCountriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCountriesRequest:
    security: GetCountriesSecurity = field(default=None)
    

@dataclass
class GetCountriesResponse:
    content_type: str = field(default=None)
    country_infos: Optional[List[shared.CountryInfo]] = field(default=None)
    status_code: int = field(default=None)
    
