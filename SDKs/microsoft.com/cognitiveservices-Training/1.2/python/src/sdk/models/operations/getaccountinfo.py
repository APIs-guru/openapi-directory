from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountInfoHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class GetAccountInfoRequest:
    headers: GetAccountInfoHeaders = field(default=None)
    

@dataclass
class GetAccountInfoResponse:
    account: Optional[shared.Account] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
