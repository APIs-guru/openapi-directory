from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderGeoBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderGeoBatchRequest:
    request: Optional[shared.BatchFirstLastNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GenderGeoBatchSecurity = field(default=None)
    

@dataclass
class GenderGeoBatchResponse:
    batch_first_last_name_gendered_out: Optional[shared.BatchFirstLastNameGenderedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
