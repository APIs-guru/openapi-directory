from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum(str, Enum):
    LOG_SOURCE_UNSPECIFIED = "LOG_SOURCE_UNSPECIFIED"
    RECENT_ACCESSES = "RECENT_ACCESSES"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1ReplayConfig:
    r"""GoogleCloudPolicysimulatorV1ReplayConfig
    The configuration used for a Replay.
    """
    
    log_source: Optional[GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logSource') }})
    policy_overlay: Optional[dict[str, GoogleIamV1Policy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyOverlay') }})
    
