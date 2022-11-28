from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenHoldersPathParams:
    tokenid: str = field(metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenHoldersRequest:
    path_params: GetTokenHoldersPathParams = field()
    

@dataclass
class GetTokenHoldersResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_token_holders_response: Optional[shared.GetTokenHoldersResponse] = field(default=None)
    
