from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetBlockPathParams:
    blockhash: str = field(default=None, metadata={'path_param': { 'field_name': 'blockhash', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetBlockRequest:
    path_params: TestnetGetBlockPathParams = field(default=None)
    

@dataclass
class TestnetGetBlockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_block_response: Optional[shared.GetBlockResponse] = field(default=None)
    
