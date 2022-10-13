from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CorridorBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CorridorBatchRequest:
    request: Optional[shared.BatchCorridorIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CorridorBatchSecurity = field(default=None)
    

@dataclass
class CorridorBatchResponse:
    batch_corridor_out: Optional[shared.BatchCorridorOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
