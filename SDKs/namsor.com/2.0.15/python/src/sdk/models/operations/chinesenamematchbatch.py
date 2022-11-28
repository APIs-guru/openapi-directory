from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChineseNameMatchBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ChineseNameMatchBatchRequest:
    security: ChineseNameMatchBatchSecurity = field()
    request: Optional[shared.BatchMatchPersonalFirstLastNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChineseNameMatchBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_name_matched_out: Optional[shared.BatchNameMatchedOut] = field(default=None)
    
