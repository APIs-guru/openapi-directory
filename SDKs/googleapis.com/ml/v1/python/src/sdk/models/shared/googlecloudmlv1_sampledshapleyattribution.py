from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1SampledShapleyAttribution:
    r"""GoogleCloudMlV1SampledShapleyAttribution
    An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
    """
    
    num_paths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numPaths') }})
    
