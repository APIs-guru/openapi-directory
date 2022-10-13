from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1FeatureMapFloatList:
    value: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
