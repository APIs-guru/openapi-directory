from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NameTypeGeoBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class NameTypeGeoBatchRequest:
    security: NameTypeGeoBatchSecurity = field()
    request: Optional[shared.BatchNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NameTypeGeoBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_proper_noun_categorized_out: Optional[shared.BatchProperNounCategorizedOut] = field(default=None)
    
