from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderChineseNameBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderChineseNameBatchRequest:
    request: Optional[shared.BatchPersonalNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GenderChineseNameBatchSecurity = field(default=None)
    

@dataclass
class GenderChineseNameBatchResponse:
    batch_personal_name_gendered_out: Optional[shared.BatchPersonalNameGenderedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
