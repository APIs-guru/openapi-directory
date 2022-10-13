from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesBlockIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcesBlockIDRequests:
    resource_block_update_model: Optional[shared.ResourceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_block_update_model1: Optional[shared.ResourceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_block_update_model2: Optional[shared.ResourceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_block_update_model3: Optional[shared.ResourceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ResourcesBlockIDRequest:
    path_params: PutSetupV1ResourcesBlockIDPathParams = field(default=None)
    request: Optional[PutSetupV1ResourcesBlockIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ResourcesBlockIDResponse:
    content_type: str = field(default=None)
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    status_code: int = field(default=None)
    
