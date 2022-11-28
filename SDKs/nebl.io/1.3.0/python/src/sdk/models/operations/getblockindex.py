from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlockIndexPathParams:
    blockindex: float = field(metadata={'path_param': { 'field_name': 'blockindex', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockIndexRequest:
    path_params: GetBlockIndexPathParams = field()
    

@dataclass
class GetBlockIndexResponse:
    content_type: str = field()
    status_code: int = field()
    get_block_index_response: Optional[shared.GetBlockIndexResponse] = field(default=None)
    
