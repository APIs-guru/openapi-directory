from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec:
    r"""GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec
    Represents the spec to match integer values from parent parameter.
    """
    
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
