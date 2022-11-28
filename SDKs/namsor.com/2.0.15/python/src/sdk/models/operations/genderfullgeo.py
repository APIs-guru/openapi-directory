from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderFullGeoPathParams:
    country_iso2: str = field(metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    full_name: str = field(metadata={'path_param': { 'field_name': 'fullName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderFullGeoSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderFullGeoRequest:
    path_params: GenderFullGeoPathParams = field()
    security: GenderFullGeoSecurity = field()
    

@dataclass
class GenderFullGeoResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_gendered_out: Optional[shared.PersonalNameGenderedOut] = field(default=None)
    
