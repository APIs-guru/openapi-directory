from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PhoneCodePathParams:
    first_name: str = field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    phone_number: str = field(metadata={'path_param': { 'field_name': 'phoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class PhoneCodeSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PhoneCodeRequest:
    path_params: PhoneCodePathParams = field()
    security: PhoneCodeSecurity = field()
    

@dataclass
class PhoneCodeResponse:
    content_type: str = field()
    status_code: int = field()
    first_last_name_phone_coded_out: Optional[shared.FirstLastNamePhoneCodedOut] = field(default=None)
    
