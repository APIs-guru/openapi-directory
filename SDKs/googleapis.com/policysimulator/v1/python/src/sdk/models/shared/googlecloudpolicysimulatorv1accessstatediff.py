from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum(str, Enum):
    ACCESS_CHANGE_TYPE_UNSPECIFIED = "ACCESS_CHANGE_TYPE_UNSPECIFIED"
    NO_CHANGE = "NO_CHANGE"
    UNKNOWN_CHANGE = "UNKNOWN_CHANGE"
    ACCESS_REVOKED = "ACCESS_REVOKED"
    ACCESS_GAINED = "ACCESS_GAINED"
    ACCESS_MAYBE_REVOKED = "ACCESS_MAYBE_REVOKED"
    ACCESS_MAYBE_GAINED = "ACCESS_MAYBE_GAINED"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1AccessStateDiff:
    r"""GoogleCloudPolicysimulatorV1AccessStateDiff
    A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.
    """
    
    access_change: Optional[GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessChange') }})
    baseline: Optional[GoogleCloudPolicysimulatorV1ExplainedAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseline') }})
    simulated: Optional[GoogleCloudPolicysimulatorV1ExplainedAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulated') }})
    
