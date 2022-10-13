from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderFullGeoPathParams:
    country_iso2: str = field(default=None, metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    full_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fullName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderFullGeoSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderFullGeoRequest:
    path_params: GenderFullGeoPathParams = field(default=None)
    security: GenderFullGeoSecurity = field(default=None)
    

@dataclass
class GenderFullGeoResponse:
    content_type: str = field(default=None)
    personal_name_gendered_out: Optional[shared.PersonalNameGenderedOut] = field(default=None)
    status_code: int = field(default=None)
    
