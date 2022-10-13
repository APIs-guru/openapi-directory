from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PredictImagePathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageQueryParams:
    application: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class PredictImageHeaders:
    prediction_key: str = field(default=None, metadata={'header': { 'field_name': 'Prediction-Key' }})
    

@dataclass
class PredictImageRequestBodyImageData:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_data: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclass
class PredictImageRequestBody:
    image_data: PredictImageRequestBodyImageData = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PredictImageRequest:
    path_params: PredictImagePathParams = field(default=None)
    query_params: PredictImageQueryParams = field(default=None)
    headers: PredictImageHeaders = field(default=None)
    request: PredictImageRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PredictImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_prediction_result_model: Optional[shared.ImagePredictionResultModel] = field(default=None)
    status_code: int = field(default=None)
    
