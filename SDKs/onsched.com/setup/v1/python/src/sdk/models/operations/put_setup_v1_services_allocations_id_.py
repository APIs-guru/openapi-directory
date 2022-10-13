from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ServicesAllocationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ServicesAllocationsIDRequests:
    service_allocation_update_model: Optional[shared.ServiceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_allocation_update_model1: Optional[shared.ServiceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_allocation_update_model2: Optional[shared.ServiceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_allocation_update_model3: Optional[shared.ServiceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ServicesAllocationsIDRequest:
    path_params: PutSetupV1ServicesAllocationsIDPathParams = field(default=None)
    request: Optional[PutSetupV1ServicesAllocationsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ServicesAllocationsIDResponse:
    content_type: str = field(default=None)
    service_allocation_view_model: Optional[shared.ServiceAllocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
