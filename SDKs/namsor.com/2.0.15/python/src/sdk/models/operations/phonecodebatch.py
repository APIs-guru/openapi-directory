from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PhoneCodeBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PhoneCodeBatchRequest:
    request: Optional[shared.BatchFirstLastNamePhoneNumberIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PhoneCodeBatchSecurity = field(default=None)
    

@dataclass
class PhoneCodeBatchResponse:
    batch_first_last_name_phone_coded_out: Optional[shared.BatchFirstLastNamePhoneCodedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
