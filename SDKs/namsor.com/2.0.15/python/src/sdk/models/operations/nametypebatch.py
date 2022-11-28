from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NameTypeBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class NameTypeBatchRequest:
    security: NameTypeBatchSecurity = field()
    request: Optional[shared.BatchNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NameTypeBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_proper_noun_categorized_out: Optional[shared.BatchProperNounCategorizedOut] = field(default=None)
    
