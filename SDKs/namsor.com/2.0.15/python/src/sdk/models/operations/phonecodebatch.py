from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PhoneCodeBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PhoneCodeBatchRequest:
    security: PhoneCodeBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNamePhoneNumberIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PhoneCodeBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_phone_coded_out: Optional[shared.BatchFirstLastNamePhoneCodedOut] = field(default=None)
    
