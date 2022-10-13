from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ResourcesAllocationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ResourcesAllocationsIDRequest:
    path_params: DeleteSetupV1ResourcesAllocationsIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1ResourcesAllocationsIDResponse:
    content_type: str = field(default=None)
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    status_code: int = field(default=None)
    
