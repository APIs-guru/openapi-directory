from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIClassifierOut:
    r"""APIClassifierOut
    The list of classifiers and versions.
    """
    
    classifier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifierName') }})
    learning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learning') }})
    probability_calibrated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityCalibrated') }})
    serving: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serving') }})
    shutting_down: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuttingDown') }})
    
