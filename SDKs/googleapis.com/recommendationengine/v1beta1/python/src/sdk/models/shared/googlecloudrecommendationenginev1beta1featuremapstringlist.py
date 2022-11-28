from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1FeatureMapStringList:
    r"""GoogleCloudRecommendationengineV1beta1FeatureMapStringList
    A list of string features.
    """
    
    value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
