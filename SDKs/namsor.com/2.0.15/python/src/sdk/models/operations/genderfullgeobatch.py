from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderFullGeoBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderFullGeoBatchRequest:
    security: GenderFullGeoBatchSecurity = field()
    request: Optional[shared.BatchPersonalNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenderFullGeoBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_personal_name_gendered_out: Optional[shared.BatchPersonalNameGenderedOut] = field(default=None)
    
