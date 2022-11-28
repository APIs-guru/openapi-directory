from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendTxRequest:
    request: shared.SendTxRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendTxResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    broadcast_tx_response: Optional[shared.BroadcastTxResponse] = field(default=None)
    
