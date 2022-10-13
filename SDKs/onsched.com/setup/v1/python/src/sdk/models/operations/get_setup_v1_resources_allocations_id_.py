from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesAllocationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcesAllocationsIDRequest:
    path_params: GetSetupV1ResourcesAllocationsIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1ResourcesAllocationsIDResponse:
    content_type: str = field(default=None)
    resource_allocation_view_model: Optional[shared.ResourceAllocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
