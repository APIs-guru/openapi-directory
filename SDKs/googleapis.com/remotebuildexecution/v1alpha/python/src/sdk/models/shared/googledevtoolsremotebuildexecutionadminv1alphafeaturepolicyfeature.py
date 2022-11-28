from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum(str, Enum):
    POLICY_UNSPECIFIED = "POLICY_UNSPECIFIED"
    ALLOWED = "ALLOWED"
    FORBIDDEN = "FORBIDDEN"
    RESTRICTED = "RESTRICTED"


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
    Defines whether a feature can be used or what values are accepted.
    """
    
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    policy: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
