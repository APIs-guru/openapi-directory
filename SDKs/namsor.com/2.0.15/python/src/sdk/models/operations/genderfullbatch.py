from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderFullBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderFullBatchRequest:
    security: GenderFullBatchSecurity = field()
    request: Optional[shared.BatchPersonalNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenderFullBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_personal_name_gendered_out: Optional[shared.BatchPersonalNameGenderedOut] = field(default=None)
    
