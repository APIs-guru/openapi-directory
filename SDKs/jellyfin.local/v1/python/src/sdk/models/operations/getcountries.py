from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCountriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCountriesRequest:
    security: GetCountriesSecurity = field()
    

@dataclass
class GetCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    country_infos: Optional[List[shared.CountryInfo]] = field(default=None)
    
