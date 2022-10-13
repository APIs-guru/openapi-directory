from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetBroadcastTxRequest:
    request: shared.BroadcastTxRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestnetBroadcastTxResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    broadcast_tx_response: Optional[shared.BroadcastTxResponse] = field(default=None)
    
