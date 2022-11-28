from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PredictImageURLWithNoStorePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageURLWithNoStoreQueryParams:
    application: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class PredictImageURLWithNoStoreHeaders:
    prediction_key: str = field(metadata={'header': { 'field_name': 'Prediction-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageURLWithNoStoreRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    image_url: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_url1: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    image_url2: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PredictImageURLWithNoStoreRequest:
    headers: PredictImageURLWithNoStoreHeaders = field()
    path_params: PredictImageURLWithNoStorePathParams = field()
    query_params: PredictImageURLWithNoStoreQueryParams = field()
    request: PredictImageURLWithNoStoreRequests = field()
    

@dataclass
class PredictImageURLWithNoStoreResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_prediction_result_model: Optional[shared.ImagePredictionResultModel] = field(default=None)
    
