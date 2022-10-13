from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyassignmentinstancefilter
from . import ospolicy
from . import ospolicyassignmentrollout

class OsPolicyAssignmentRolloutStateEnum(str, Enum):
    ROLLOUT_STATE_UNSPECIFIED = "ROLLOUT_STATE_UNSPECIFIED"
    IN_PROGRESS = "IN_PROGRESS"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"


@dataclass_json
@dataclass
class OsPolicyAssignment:
    baseline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseline' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    instance_filter: Optional[ospolicyassignmentinstancefilter.OsPolicyAssignmentInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceFilter' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_policies: Optional[List[ospolicy.OsPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicies' }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciling' }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionCreateTime' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    rollout: Optional[ospolicyassignmentrollout.OsPolicyAssignmentRollout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollout' }})
    rollout_state: Optional[OsPolicyAssignmentRolloutStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutState' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
