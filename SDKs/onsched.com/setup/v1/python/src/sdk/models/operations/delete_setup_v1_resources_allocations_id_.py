from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ResourcesAllocationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ResourcesAllocationsIDRequest:
    path_params: DeleteSetupV1ResourcesAllocationsIDPathParams = field()
    

@dataclass
class DeleteSetupV1ResourcesAllocationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    
