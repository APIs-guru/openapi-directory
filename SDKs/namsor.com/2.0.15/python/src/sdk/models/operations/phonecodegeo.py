from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PhoneCodeGeoPathParams:
    country_iso2: str = field(metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    first_name: str = field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    phone_number: str = field(metadata={'path_param': { 'field_name': 'phoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class PhoneCodeGeoSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PhoneCodeGeoRequest:
    path_params: PhoneCodeGeoPathParams = field()
    security: PhoneCodeGeoSecurity = field()
    

@dataclass
class PhoneCodeGeoResponse:
    content_type: str = field()
    status_code: int = field()
    first_last_name_phone_coded_out: Optional[shared.FirstLastNamePhoneCodedOut] = field(default=None)
    
