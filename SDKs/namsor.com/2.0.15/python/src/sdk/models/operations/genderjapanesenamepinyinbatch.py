from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderJapaneseNamePinyinBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderJapaneseNamePinyinBatchRequest:
    request: Optional[shared.BatchFirstLastNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GenderJapaneseNamePinyinBatchSecurity = field(default=None)
    

@dataclass
class GenderJapaneseNamePinyinBatchResponse:
    batch_first_last_name_gendered_out: Optional[shared.BatchFirstLastNameGenderedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
