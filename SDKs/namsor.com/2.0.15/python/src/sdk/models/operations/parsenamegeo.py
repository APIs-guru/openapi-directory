from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseNameGeoPathParams:
    country_iso2: str = field(default=None, metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    name_full: str = field(default=None, metadata={'path_param': { 'field_name': 'nameFull', 'style': 'simple', 'explode': False }})
    

@dataclass
class ParseNameGeoSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseNameGeoRequest:
    path_params: ParseNameGeoPathParams = field(default=None)
    security: ParseNameGeoSecurity = field(default=None)
    

@dataclass
class ParseNameGeoResponse:
    content_type: str = field(default=None)
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    status_code: int = field(default=None)
    
