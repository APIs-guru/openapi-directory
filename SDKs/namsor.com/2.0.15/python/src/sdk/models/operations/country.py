from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CountryPathParams:
    personal_name_full: str = field(default=None, metadata={'path_param': { 'field_name': 'personalNameFull', 'style': 'simple', 'explode': False }})
    

@dataclass
class CountrySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CountryRequest:
    path_params: CountryPathParams = field(default=None)
    security: CountrySecurity = field(default=None)
    

@dataclass
class CountryResponse:
    content_type: str = field(default=None)
    personal_name_geo_out: Optional[shared.PersonalNameGeoOut] = field(default=None)
    status_code: int = field(default=None)
    
