from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1ExplainedAccess:
    r"""GoogleCloudPolicysimulatorV1ExplainedAccess
    Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
    """
    
    access_state: Optional[GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessState') }})
    errors: Optional[List[GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    policies: Optional[List[GoogleCloudPolicysimulatorV1ExplainedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
