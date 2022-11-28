from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ServicesIDBlockPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1ServicesIDBlockRequests:
    service_block_input_model: Optional[shared.ServiceBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_block_input_model1: Optional[shared.ServiceBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_block_input_model2: Optional[shared.ServiceBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_block_input_model3: Optional[shared.ServiceBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ServicesIDBlockRequest:
    path_params: PostSetupV1ServicesIDBlockPathParams = field()
    request: Optional[PostSetupV1ServicesIDBlockRequests] = field(default=None)
    

@dataclass
class PostSetupV1ServicesIDBlockResponse:
    content_type: str = field()
    status_code: int = field()
    service_block_view_model: Optional[shared.ServiceBlockViewModel] = field(default=None)
    
