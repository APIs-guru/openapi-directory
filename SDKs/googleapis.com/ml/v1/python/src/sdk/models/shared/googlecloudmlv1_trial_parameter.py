from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1TrialParameter:
    r"""GoogleCloudMlV1TrialParameter
    A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.
    """
    
    float_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floatValue') }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
