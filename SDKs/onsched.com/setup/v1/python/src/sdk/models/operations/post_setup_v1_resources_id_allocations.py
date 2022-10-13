from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ResourcesIDAllocationsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1ResourcesIDAllocationsRequests:
    resource_allocation_input_model: Optional[shared.ResourceAllocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_allocation_input_model1: Optional[shared.ResourceAllocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_allocation_input_model2: Optional[shared.ResourceAllocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_allocation_input_model3: Optional[shared.ResourceAllocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ResourcesIDAllocationsRequest:
    path_params: PostSetupV1ResourcesIDAllocationsPathParams = field(default=None)
    request: Optional[PostSetupV1ResourcesIDAllocationsRequests] = field(default=None)
    

@dataclass
class PostSetupV1ResourcesIDAllocationsResponse:
    content_type: str = field(default=None)
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    status_code: int = field(default=None)
    
