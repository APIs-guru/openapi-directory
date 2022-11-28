from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetBlockIndexPathParams:
    blockindex: float = field(metadata={'path_param': { 'field_name': 'blockindex', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetBlockIndexRequest:
    path_params: TestnetGetBlockIndexPathParams = field()
    

@dataclass
class TestnetGetBlockIndexResponse:
    content_type: str = field()
    status_code: int = field()
    get_block_index_response: Optional[shared.GetBlockIndexResponse] = field(default=None)
    
