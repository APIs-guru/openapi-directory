from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CountryPathParams:
    personal_name_full: str = field(metadata={'path_param': { 'field_name': 'personalNameFull', 'style': 'simple', 'explode': False }})
    

@dataclass
class CountrySecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CountryRequest:
    path_params: CountryPathParams = field()
    security: CountrySecurity = field()
    

@dataclass
class CountryResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_geo_out: Optional[shared.PersonalNameGeoOut] = field(default=None)
    
