from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval:
    r"""GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval
    A confidence interval is a range of possible values for the experiment objective you are trying to measure.
    """
    
    confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceLevel') }})
    lower_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowerBound') }})
    ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    upper_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upperBound') }})
    
