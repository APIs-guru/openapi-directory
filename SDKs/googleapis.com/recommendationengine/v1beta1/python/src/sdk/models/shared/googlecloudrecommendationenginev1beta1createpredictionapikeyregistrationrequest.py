from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1CreatePredictionAPIKeyRegistrationRequest:
    r"""GoogleCloudRecommendationengineV1beta1CreatePredictionAPIKeyRegistrationRequest
    Request message for the `CreatePredictionApiKeyRegistration` method.
    """
    
    prediction_api_key_registration: Optional[GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionApiKeyRegistration') }})
    
