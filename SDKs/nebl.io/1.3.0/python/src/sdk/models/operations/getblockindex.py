from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlockIndexPathParams:
    blockindex: float = field(default=None, metadata={'path_param': { 'field_name': 'blockindex', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockIndexRequest:
    path_params: GetBlockIndexPathParams = field(default=None)
    

@dataclass
class GetBlockIndexResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_block_index_response: Optional[shared.GetBlockIndexResponse] = field(default=None)
    
