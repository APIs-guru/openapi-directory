from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlockPathParams:
    blockhash: str = field(default=None, metadata={'path_param': { 'field_name': 'blockhash', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockRequest:
    path_params: GetBlockPathParams = field(default=None)
    

@dataclass
class GetBlockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_block_response: Optional[shared.GetBlockResponse] = field(default=None)
    
