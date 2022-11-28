from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountInfoHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountInfoRequest:
    headers: GetAccountInfoHeaders = field()
    

@dataclass
class GetAccountInfoResponse:
    content_type: str = field()
    status_code: int = field()
    account: Optional[shared.Account] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
