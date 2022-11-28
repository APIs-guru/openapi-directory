from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenIDPathParams:
    tokensymbol: str = field(metadata={'path_param': { 'field_name': 'tokensymbol', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenIDRequest:
    path_params: GetTokenIDPathParams = field()
    

@dataclass
class GetTokenIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_token_id_response: Optional[shared.GetTokenIDResponse] = field(default=None)
    
