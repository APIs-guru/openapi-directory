from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTokenHoldersPathParams:
    tokenid: str = field(default=None, metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetTokenHoldersRequest:
    path_params: TestnetGetTokenHoldersPathParams = field(default=None)
    

@dataclass
class TestnetGetTokenHoldersResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    get_token_holders_response: Optional[shared.GetTokenHoldersResponse] = field(default=None)
    
