from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OsPolicyAssignmentRolloutStateEnum(str, Enum):
    ROLLOUT_STATE_UNSPECIFIED = "ROLLOUT_STATE_UNSPECIFIED"
    IN_PROGRESS = "IN_PROGRESS"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"


@dataclass_json
@dataclass
class OsPolicyAssignment:
    r"""OsPolicyAssignment
    OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
    """
    
    baseline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseline') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    instance_filter: Optional[OsPolicyAssignmentInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_policies: Optional[List[OsPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicies') }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    rollout: Optional[OsPolicyAssignmentRollout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    rollout_state: Optional[OsPolicyAssignmentRolloutStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutState') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class OsPolicyAssignmentInput:
    r"""OsPolicyAssignmentInput
    OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    instance_filter: Optional[OsPolicyAssignmentInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_policies: Optional[List[OsPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicies') }})
    rollout: Optional[OsPolicyAssignmentRollout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    
