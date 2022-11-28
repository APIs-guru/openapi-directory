from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PredictImagePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageQueryParams:
    application: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class PredictImageHeaders:
    prediction_key: str = field(metadata={'header': { 'field_name': 'Prediction-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageRequestBodyImageData:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_data: str = field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclass
class PredictImageRequestBody:
    image_data: PredictImageRequestBodyImageData = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PredictImageRequest:
    headers: PredictImageHeaders = field()
    path_params: PredictImagePathParams = field()
    query_params: PredictImageQueryParams = field()
    request: PredictImageRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PredictImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_prediction_result_model: Optional[shared.ImagePredictionResultModel] = field(default=None)
    
