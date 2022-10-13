from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ServicesIDUploadimagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1ServicesIDUploadimageRequests:
    service_image_input_model: Optional[shared.ServiceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_image_input_model1: Optional[shared.ServiceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_image_input_model2: Optional[shared.ServiceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_image_input_model3: Optional[shared.ServiceImageInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ServicesIDUploadimageRequest:
    path_params: PostSetupV1ServicesIDUploadimagePathParams = field(default=None)
    request: Optional[PostSetupV1ServicesIDUploadimageRequests] = field(default=None)
    

@dataclass
class PostSetupV1ServicesIDUploadimageResponse:
    content_type: str = field(default=None)
    service_view_model: Optional[shared.ServiceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
