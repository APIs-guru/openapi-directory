from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseNameGeoBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseNameGeoBatchRequest:
    security: ParseNameGeoBatchSecurity = field()
    request: Optional[shared.BatchPersonalNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ParseNameGeoBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_personal_name_parsed_out: Optional[shared.BatchPersonalNameParsedOut] = field(default=None)
    
