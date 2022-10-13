from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1LocationsIDUploadimagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1LocationsIDUploadimageRequests:
    resource_image_input_model: Optional[shared.ResourceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_image_input_model1: Optional[shared.ResourceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_image_input_model2: Optional[shared.ResourceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_image_input_model3: Optional[shared.ResourceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1LocationsIDUploadimageRequest:
    path_params: PostSetupV1LocationsIDUploadimagePathParams = field(default=None)
    request: Optional[PostSetupV1LocationsIDUploadimageRequests] = field(default=None)
    

@dataclass
class PostSetupV1LocationsIDUploadimageResponse:
    content_type: str = field(default=None)
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
