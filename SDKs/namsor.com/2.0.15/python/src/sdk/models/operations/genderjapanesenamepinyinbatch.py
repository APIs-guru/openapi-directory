from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderJapaneseNamePinyinBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderJapaneseNamePinyinBatchRequest:
    security: GenderJapaneseNamePinyinBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenderJapaneseNamePinyinBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_gendered_out: Optional[shared.BatchFirstLastNameGenderedOut] = field(default=None)
    
