from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1predictionapikeyregistration


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    prediction_api_key_registrations: Optional[List[googlecloudrecommendationenginev1beta1predictionapikeyregistration.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionApiKeyRegistrations' }})
    
