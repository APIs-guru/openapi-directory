from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualityDimensionResult:
    r"""GoogleCloudDataplexV1DataQualityDimensionResult
    DataQualityDimensionResult provides a more detailed, per-dimension level view of the results.
    """
    
    passed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passed') }})
    
