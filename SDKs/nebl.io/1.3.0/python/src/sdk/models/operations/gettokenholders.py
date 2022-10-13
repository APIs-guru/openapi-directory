from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenHoldersPathParams:
    tokenid: str = field(default=None, metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenHoldersRequest:
    path_params: GetTokenHoldersPathParams = field(default=None)
    

@dataclass
class GetTokenHoldersResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    get_token_holders_response: Optional[shared.GetTokenHoldersResponse] = field(default=None)
    
