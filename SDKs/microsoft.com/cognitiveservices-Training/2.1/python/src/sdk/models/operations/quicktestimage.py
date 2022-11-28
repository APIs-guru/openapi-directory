from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class QuickTestImagePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuickTestImageQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class QuickTestImageHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuickTestImageRequestBodyImageData:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_data: str = field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclass
class QuickTestImageRequestBody:
    image_data: QuickTestImageRequestBodyImageData = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class QuickTestImageRequest:
    headers: QuickTestImageHeaders = field()
    path_params: QuickTestImagePathParams = field()
    query_params: QuickTestImageQueryParams = field()
    request: QuickTestImageRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class QuickTestImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_prediction: Optional[shared.ImagePrediction] = field(default=None)
    
