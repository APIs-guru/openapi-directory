from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ServicesAllocationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ServicesAllocationsIDRequest:
    path_params: DeleteSetupV1ServicesAllocationsIDPathParams = field()
    

@dataclass
class DeleteSetupV1ServicesAllocationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    service_allocation_view_model: Optional[shared.ServiceAllocationViewModel] = field(default=None)
    
