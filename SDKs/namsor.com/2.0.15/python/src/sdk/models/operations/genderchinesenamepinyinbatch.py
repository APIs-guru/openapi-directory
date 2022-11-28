from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderChineseNamePinyinBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderChineseNamePinyinBatchRequest:
    security: GenderChineseNamePinyinBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenderChineseNamePinyinBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_gendered_out: Optional[shared.BatchFirstLastNameGenderedOut] = field(default=None)
    
