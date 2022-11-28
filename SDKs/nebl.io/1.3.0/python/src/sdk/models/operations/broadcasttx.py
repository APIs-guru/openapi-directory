from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BroadcastTxRequest:
    request: shared.BroadcastTxRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BroadcastTxResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    broadcast_tx_response: Optional[shared.BroadcastTxResponse] = field(default=None)
    
