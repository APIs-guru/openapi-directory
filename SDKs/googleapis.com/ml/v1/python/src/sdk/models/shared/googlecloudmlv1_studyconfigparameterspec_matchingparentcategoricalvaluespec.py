from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec:
    r"""GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec
    Represents the spec to match categorical values from parent parameter.
    """
    
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
