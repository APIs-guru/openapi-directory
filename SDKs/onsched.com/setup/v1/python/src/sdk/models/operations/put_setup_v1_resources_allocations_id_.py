from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesAllocationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcesAllocationsIDRequests:
    resource_allocation_update_model: Optional[shared.ResourceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_allocation_update_model1: Optional[shared.ResourceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_allocation_update_model2: Optional[shared.ResourceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_allocation_update_model3: Optional[shared.ResourceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ResourcesAllocationsIDRequest:
    path_params: PutSetupV1ResourcesAllocationsIDPathParams = field(default=None)
    request: Optional[PutSetupV1ResourcesAllocationsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ResourcesAllocationsIDResponse:
    content_type: str = field(default=None)
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    status_code: int = field(default=None)
    
