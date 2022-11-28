from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostSetupV1ServicesIDAllocationsBulkPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1ServicesIDAllocationsBulkRequests:
    service_allocations_input_model: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_allocations_input_model1: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_allocations_input_model2: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_allocations_input_model3: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ServicesIDAllocationsBulkRequest:
    path_params: PostSetupV1ServicesIDAllocationsBulkPathParams = field()
    request: Optional[PostSetupV1ServicesIDAllocationsBulkRequests] = field(default=None)
    

@dataclass
class PostSetupV1ServicesIDAllocationsBulkResponse:
    content_type: str = field()
    status_code: int = field()
    service_allocation_view_models: Optional[List[shared.ServiceAllocationViewModel]] = field(default=None)
    
