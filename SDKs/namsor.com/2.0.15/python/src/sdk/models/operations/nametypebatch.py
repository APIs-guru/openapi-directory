from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NameTypeBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class NameTypeBatchRequest:
    request: Optional[shared.BatchNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: NameTypeBatchSecurity = field(default=None)
    

@dataclass
class NameTypeBatchResponse:
    batch_proper_noun_categorized_out: Optional[shared.BatchProperNounCategorizedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
