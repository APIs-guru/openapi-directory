from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseJapaneseNameBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseJapaneseNameBatchRequest:
    security: ParseJapaneseNameBatchSecurity = field()
    request: Optional[shared.BatchPersonalNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ParseJapaneseNameBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_personal_name_parsed_out: Optional[shared.BatchPersonalNameParsedOut] = field(default=None)
    
