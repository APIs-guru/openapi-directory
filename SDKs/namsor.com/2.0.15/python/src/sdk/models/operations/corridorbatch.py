from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CorridorBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CorridorBatchRequest:
    security: CorridorBatchSecurity = field()
    request: Optional[shared.BatchCorridorIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CorridorBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_corridor_out: Optional[shared.BatchCorridorOut] = field(default=None)
    
