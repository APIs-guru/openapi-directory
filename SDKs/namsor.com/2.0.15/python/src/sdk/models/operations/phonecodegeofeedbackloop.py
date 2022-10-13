from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PhoneCodeGeoFeedbackLoopPathParams:
    country_iso2: str = field(default=None, metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    first_name: str = field(default=None, metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(default=None, metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    phone_number: str = field(default=None, metadata={'path_param': { 'field_name': 'phoneNumber', 'style': 'simple', 'explode': False }})
    phone_number_e164: str = field(default=None, metadata={'path_param': { 'field_name': 'phoneNumberE164', 'style': 'simple', 'explode': False }})
    

@dataclass
class PhoneCodeGeoFeedbackLoopSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PhoneCodeGeoFeedbackLoopRequest:
    path_params: PhoneCodeGeoFeedbackLoopPathParams = field(default=None)
    security: PhoneCodeGeoFeedbackLoopSecurity = field(default=None)
    

@dataclass
class PhoneCodeGeoFeedbackLoopResponse:
    content_type: str = field(default=None)
    first_last_name_phone_coded_out: Optional[shared.FirstLastNamePhoneCodedOut] = field(default=None)
    status_code: int = field(default=None)
    
