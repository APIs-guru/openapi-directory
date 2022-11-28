from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ServicesAllocationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ServicesAllocationsIDRequest:
    path_params: GetSetupV1ServicesAllocationsIDPathParams = field()
    

@dataclass
class GetSetupV1ServicesAllocationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    service_allocation_view_model: Optional[shared.ServiceAllocationViewModel] = field(default=None)
    
