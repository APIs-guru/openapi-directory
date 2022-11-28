from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ReplayDiff:
    r"""GoogleCloudPolicysimulatorV1beta1ReplayDiff
    The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a member's access could change if the proposed policies were applied.
    """
    
    access_diff: Optional[GoogleCloudPolicysimulatorV1beta1AccessStateDiff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessDiff') }})
    
