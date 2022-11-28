from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesBlocksIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcesBlocksIDRequest:
    path_params: GetSetupV1ResourcesBlocksIDPathParams = field()
    

@dataclass
class GetSetupV1ResourcesBlocksIDResponse:
    content_type: str = field()
    status_code: int = field()
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    
