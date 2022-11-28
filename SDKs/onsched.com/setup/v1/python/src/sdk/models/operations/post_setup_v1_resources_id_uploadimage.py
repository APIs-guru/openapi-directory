from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ResourcesIDUploadimagePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1ResourcesIDUploadimageRequests:
    resource_image_input_model: Optional[shared.ResourceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_image_input_model1: Optional[shared.ResourceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_image_input_model2: Optional[shared.ResourceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_image_input_model3: Optional[shared.ResourceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ResourcesIDUploadimageRequest:
    path_params: PostSetupV1ResourcesIDUploadimagePathParams = field()
    request: Optional[PostSetupV1ResourcesIDUploadimageRequests] = field(default=None)
    

@dataclass
class PostSetupV1ResourcesIDUploadimageResponse:
    content_type: str = field()
    status_code: int = field()
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    
