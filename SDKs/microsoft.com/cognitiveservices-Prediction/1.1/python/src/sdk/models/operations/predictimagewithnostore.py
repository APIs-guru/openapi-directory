from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PredictImageWithNoStorePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageWithNoStoreQueryParams:
    application: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class PredictImageWithNoStoreHeaders:
    prediction_key: str = field(metadata={'header': { 'field_name': 'Prediction-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageWithNoStoreRequestBodyImageData:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_data: str = field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclass
class PredictImageWithNoStoreRequestBody:
    image_data: PredictImageWithNoStoreRequestBodyImageData = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PredictImageWithNoStoreRequest:
    headers: PredictImageWithNoStoreHeaders = field()
    path_params: PredictImageWithNoStorePathParams = field()
    query_params: PredictImageWithNoStoreQueryParams = field()
    request: PredictImageWithNoStoreRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PredictImageWithNoStoreResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_prediction_result_model: Optional[shared.ImagePredictionResultModel] = field(default=None)
    
