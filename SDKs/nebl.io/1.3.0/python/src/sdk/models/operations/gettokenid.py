from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenIDPathParams:
    tokensymbol: str = field(default=None, metadata={'path_param': { 'field_name': 'tokensymbol', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenIDRequest:
    path_params: GetTokenIDPathParams = field(default=None)
    

@dataclass
class GetTokenIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_token_id_response: Optional[shared.GetTokenIDResponse] = field(default=None)
    
