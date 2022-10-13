from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommendationenginev1beta1predictionapikeyregistration


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1CreatePredictionAPIKeyRegistrationRequest:
    prediction_api_key_registration: Optional[googlecloudrecommendationenginev1beta1predictionapikeyregistration.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionApiKeyRegistration' }})
    
