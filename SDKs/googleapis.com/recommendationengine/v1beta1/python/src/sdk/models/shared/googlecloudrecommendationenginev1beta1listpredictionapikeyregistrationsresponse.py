from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse:
    r"""GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse
    Response message for the `ListPredictionApiKeyRegistrations`.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    prediction_api_key_registrations: Optional[List[GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionApiKeyRegistrations') }})
    
