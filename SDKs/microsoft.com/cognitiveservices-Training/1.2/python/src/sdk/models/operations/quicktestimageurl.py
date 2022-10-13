from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class QuickTestImageURLPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuickTestImageURLQueryParams:
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class QuickTestImageURLHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class QuickTestImageURLRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    image_url: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_url1: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    image_url2: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class QuickTestImageURLRequest:
    path_params: QuickTestImageURLPathParams = field(default=None)
    query_params: QuickTestImageURLQueryParams = field(default=None)
    headers: QuickTestImageURLHeaders = field(default=None)
    request: QuickTestImageURLRequests = field(default=None)
    

@dataclass
class QuickTestImageURLResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_prediction_result: Optional[shared.ImagePredictionResult] = field(default=None)
    status_code: int = field(default=None)
    
