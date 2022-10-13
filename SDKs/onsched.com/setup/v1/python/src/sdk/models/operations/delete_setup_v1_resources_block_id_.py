from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ResourcesBlockIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ResourcesBlockIDRequest:
    path_params: DeleteSetupV1ResourcesBlockIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1ResourcesBlockIDResponse:
    content_type: str = field(default=None)
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    status_code: int = field(default=None)
    
