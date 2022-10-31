from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class QuickTestImagePathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuickTestImageQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class QuickTestImageHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuickTestImageRequestBodyImageData:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_data: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclass
class QuickTestImageRequestBody:
    image_data: QuickTestImageRequestBodyImageData = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class QuickTestImageRequest:
    path_params: QuickTestImagePathParams = field(default=None)
    query_params: QuickTestImageQueryParams = field(default=None)
    headers: QuickTestImageHeaders = field(default=None)
    request: QuickTestImageRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class QuickTestImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_prediction_result: Optional[shared.ImagePredictionResult] = field(default=None)
    status_code: int = field(default=None)
    
