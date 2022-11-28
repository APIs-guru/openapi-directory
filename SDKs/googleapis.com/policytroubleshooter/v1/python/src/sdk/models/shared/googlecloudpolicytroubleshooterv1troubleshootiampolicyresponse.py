from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse:
    r"""GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
    Response for TroubleshootIamPolicy.
    """
    
    access: Optional[GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    errors: Optional[List[GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    explained_policies: Optional[List[GoogleCloudPolicytroubleshooterV1ExplainedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explainedPolicies') }})
    
