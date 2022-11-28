from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OriginBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OriginBatchRequest:
    security: OriginBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OriginBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_origined_out: Optional[shared.BatchFirstLastNameOriginedOut] = field(default=None)
    
