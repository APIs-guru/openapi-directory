from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTokenIDPathParams:
    tokensymbol: str = field(metadata={'path_param': { 'field_name': 'tokensymbol', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetTokenIDRequest:
    path_params: TestnetGetTokenIDPathParams = field()
    

@dataclass
class TestnetGetTokenIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_token_id_response: Optional[shared.GetTokenIDResponse] = field(default=None)
    
