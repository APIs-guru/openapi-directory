from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DiasporaBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DiasporaBatchRequest:
    security: DiasporaBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameGeoIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiasporaBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_first_last_name_diasporaed_out: Optional[shared.BatchFirstLastNameDiasporaedOut] = field(default=None)
    
