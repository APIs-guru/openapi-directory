from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTokenIDPathParams:
    tokensymbol: str = field(default=None, metadata={'path_param': { 'field_name': 'tokensymbol', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetTokenIDRequest:
    path_params: TestnetGetTokenIDPathParams = field(default=None)
    

@dataclass
class TestnetGetTokenIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_token_id_response: Optional[shared.GetTokenIDResponse] = field(default=None)
    
