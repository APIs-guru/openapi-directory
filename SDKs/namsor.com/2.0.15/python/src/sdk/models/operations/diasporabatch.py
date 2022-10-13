from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DiasporaBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DiasporaBatchRequest:
    request: Optional[shared.BatchFirstLastNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DiasporaBatchSecurity = field(default=None)
    

@dataclass
class DiasporaBatchResponse:
    batch_first_last_name_diasporaed_out: Optional[shared.BatchFirstLastNameDiasporaedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
