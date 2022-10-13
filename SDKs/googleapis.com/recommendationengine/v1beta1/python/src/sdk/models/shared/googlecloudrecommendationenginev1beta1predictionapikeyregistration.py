from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    
