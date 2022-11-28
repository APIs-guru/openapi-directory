from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlockPathParams:
    blockhash: str = field(metadata={'path_param': { 'field_name': 'blockhash', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockRequest:
    path_params: GetBlockPathParams = field()
    

@dataclass
class GetBlockResponse:
    content_type: str = field()
    status_code: int = field()
    get_block_response: Optional[shared.GetBlockResponse] = field(default=None)
    
