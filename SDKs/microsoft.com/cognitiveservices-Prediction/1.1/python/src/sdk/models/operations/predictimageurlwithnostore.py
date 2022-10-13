from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PredictImageURLWithNoStorePathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PredictImageURLWithNoStoreQueryParams:
    application: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclass
class PredictImageURLWithNoStoreHeaders:
    prediction_key: str = field(default=None, metadata={'header': { 'field_name': 'Prediction-Key' }})
    

@dataclass
class PredictImageURLWithNoStoreRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    image_url: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_url1: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    image_url2: Optional[shared.ImageURL] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PredictImageURLWithNoStoreRequest:
    path_params: PredictImageURLWithNoStorePathParams = field(default=None)
    query_params: PredictImageURLWithNoStoreQueryParams = field(default=None)
    headers: PredictImageURLWithNoStoreHeaders = field(default=None)
    request: PredictImageURLWithNoStoreRequests = field(default=None)
    

@dataclass
class PredictImageURLWithNoStoreResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_prediction_result_model: Optional[shared.ImagePredictionResultModel] = field(default=None)
    status_code: int = field(default=None)
    
