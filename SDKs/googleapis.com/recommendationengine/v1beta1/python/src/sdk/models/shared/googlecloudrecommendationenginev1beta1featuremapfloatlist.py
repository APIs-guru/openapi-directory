from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1FeatureMapFloatList:
    r"""GoogleCloudRecommendationengineV1beta1FeatureMapFloatList
    A list of float features.
    """
    
    value: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
