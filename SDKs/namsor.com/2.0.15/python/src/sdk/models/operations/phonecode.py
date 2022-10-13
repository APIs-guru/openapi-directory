from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PhoneCodePathParams:
    first_name: str = field(default=None, metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(default=None, metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    phone_number: str = field(default=None, metadata={'path_param': { 'field_name': 'phoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class PhoneCodeSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PhoneCodeRequest:
    path_params: PhoneCodePathParams = field(default=None)
    security: PhoneCodeSecurity = field(default=None)
    

@dataclass
class PhoneCodeResponse:
    content_type: str = field(default=None)
    first_last_name_phone_coded_out: Optional[shared.FirstLastNamePhoneCodedOut] = field(default=None)
    status_code: int = field(default=None)
    
