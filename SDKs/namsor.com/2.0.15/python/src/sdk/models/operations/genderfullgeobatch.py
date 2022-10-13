from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderFullGeoBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderFullGeoBatchRequest:
    request: Optional[shared.BatchPersonalNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GenderFullGeoBatchSecurity = field(default=None)
    

@dataclass
class GenderFullGeoBatchResponse:
    batch_personal_name_gendered_out: Optional[shared.BatchPersonalNameGenderedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
