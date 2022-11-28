from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PhoneCodeGeoBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PhoneCodeGeoBatchRequest:
    security: PhoneCodeGeoBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNamePhoneNumberGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PhoneCodeGeoBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_phone_coded_out: Optional[shared.BatchFirstLastNamePhoneCodedOut] = field(default=None)
    
