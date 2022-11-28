from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetBlockPathParams:
    blockhash: str = field(metadata={'path_param': { 'field_name': 'blockhash', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetBlockRequest:
    path_params: TestnetGetBlockPathParams = field()
    

@dataclass
class TestnetGetBlockResponse:
    content_type: str = field()
    status_code: int = field()
    get_block_response: Optional[shared.GetBlockResponse] = field(default=None)
    
