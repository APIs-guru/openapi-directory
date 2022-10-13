from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PinyinChineseNameBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PinyinChineseNameBatchRequest:
    request: Optional[shared.BatchPersonalNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PinyinChineseNameBatchSecurity = field(default=None)
    

@dataclass
class PinyinChineseNameBatchResponse:
    batch_personal_name_parsed_out: Optional[shared.BatchPersonalNameParsedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
