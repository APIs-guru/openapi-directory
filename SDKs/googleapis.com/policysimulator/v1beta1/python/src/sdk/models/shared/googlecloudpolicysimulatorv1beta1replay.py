from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ReplayInput:
    r"""GoogleCloudPolicysimulatorV1beta1ReplayInput
    A resource describing a `Replay`, or simulation.
    """
    
    config: Optional[GoogleCloudPolicysimulatorV1beta1ReplayConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    results_summary: Optional[GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultsSummary') }})
    
