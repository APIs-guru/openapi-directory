from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse:
    r"""GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
    Response for TroubleshootIamPolicy.
    """
    
    access: Optional[GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    explained_policies: Optional[List[GoogleCloudPolicytroubleshooterV1betaExplainedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explainedPolicies') }})
    
