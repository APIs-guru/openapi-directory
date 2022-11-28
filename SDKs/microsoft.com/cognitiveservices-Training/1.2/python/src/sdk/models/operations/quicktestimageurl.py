from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class QuickTestImageURLPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuickTestImageURLQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class QuickTestImageURLHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuickTestImageURLRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    image_url: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_url1: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    image_url2: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class QuickTestImageURLRequest:
    headers: QuickTestImageURLHeaders = field()
    path_params: QuickTestImageURLPathParams = field()
    query_params: QuickTestImageURLQueryParams = field()
    request: QuickTestImageURLRequests = field()
    

@dataclass
class QuickTestImageURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_prediction_result: Optional[shared.ImagePredictionResult] = field(default=None)
    
