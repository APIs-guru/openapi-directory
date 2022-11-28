from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ServicesIDAllocationsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1ServicesIDAllocationsRequests:
    service_allocation_input_model: Optional[shared.ServiceAllocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_allocation_input_model1: Optional[shared.ServiceAllocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_allocation_input_model2: Optional[shared.ServiceAllocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_allocation_input_model3: Optional[shared.ServiceAllocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ServicesIDAllocationsRequest:
    path_params: PostSetupV1ServicesIDAllocationsPathParams = field()
    request: Optional[PostSetupV1ServicesIDAllocationsRequests] = field(default=None)
    

@dataclass
class PostSetupV1ServicesIDAllocationsResponse:
    content_type: str = field()
    status_code: int = field()
    service_allocation_view_model: Optional[shared.ServiceAllocationViewModel] = field(default=None)
    
