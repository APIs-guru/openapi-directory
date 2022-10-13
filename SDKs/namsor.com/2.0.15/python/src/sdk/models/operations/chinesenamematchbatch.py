from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChineseNameMatchBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ChineseNameMatchBatchRequest:
    request: Optional[shared.BatchMatchPersonalFirstLastNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ChineseNameMatchBatchSecurity = field(default=None)
    

@dataclass
class ChineseNameMatchBatchResponse:
    batch_name_matched_out: Optional[shared.BatchNameMatchedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
