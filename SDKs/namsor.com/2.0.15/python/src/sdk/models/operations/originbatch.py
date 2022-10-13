from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OriginBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OriginBatchRequest:
    request: Optional[shared.BatchFirstLastNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: OriginBatchSecurity = field(default=None)
    

@dataclass
class OriginBatchResponse:
    batch_first_last_name_origined_out: Optional[shared.BatchFirstLastNameOriginedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
