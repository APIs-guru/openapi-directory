from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1InsightRecommendationReference:
    r"""GoogleCloudRecommenderV1beta1InsightRecommendationReference
    Reference to an associated recommendation.
    """
    
    recommendation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    
