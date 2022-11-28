from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PredictImageURLPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageURLQueryParams:
    application: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class PredictImageURLHeaders:
    prediction_key: str = field(metadata={'header': { 'field_name': 'Prediction-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageURLRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    image_url: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_url1: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    image_url2: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PredictImageURLRequest:
    headers: PredictImageURLHeaders = field()
    path_params: PredictImageURLPathParams = field()
    query_params: PredictImageURLQueryParams = field()
    request: PredictImageURLRequests = field()
    

@dataclass
class PredictImageURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_prediction_result_model: Optional[shared.ImagePredictionResultModel] = field(default=None)
    
