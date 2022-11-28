from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ResourcesIDBlockPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1ResourcesIDBlockRequests:
    resource_block_input_model: Optional[shared.ResourceBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_block_input_model1: Optional[shared.ResourceBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_block_input_model2: Optional[shared.ResourceBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_block_input_model3: Optional[shared.ResourceBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ResourcesIDBlockRequest:
    path_params: PostSetupV1ResourcesIDBlockPathParams = field()
    request: Optional[PostSetupV1ResourcesIDBlockRequests] = field(default=None)
    

@dataclass
class PostSetupV1ResourcesIDBlockResponse:
    content_type: str = field()
    status_code: int = field()
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    
