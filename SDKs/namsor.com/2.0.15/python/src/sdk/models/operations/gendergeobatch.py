from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderGeoBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderGeoBatchRequest:
    security: GenderGeoBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenderGeoBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_gendered_out: Optional[shared.BatchFirstLastNameGenderedOut] = field(default=None)
    
