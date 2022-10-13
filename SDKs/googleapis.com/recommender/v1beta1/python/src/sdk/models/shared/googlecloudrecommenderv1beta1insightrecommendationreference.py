from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1InsightRecommendationReference:
    recommendation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendation' }})
    
