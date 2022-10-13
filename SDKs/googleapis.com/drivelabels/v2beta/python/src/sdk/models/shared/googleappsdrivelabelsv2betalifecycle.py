from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalifecycledisabledpolicy

class GoogleAppsDriveLabelsV2betaLifecycleStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    UNPUBLISHED_DRAFT = "UNPUBLISHED_DRAFT"
    PUBLISHED = "PUBLISHED"
    DISABLED = "DISABLED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLifecycle:
    disabled_policy: Optional[googleappsdrivelabelsv2betalifecycledisabledpolicy.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledPolicy' }})
    has_unpublished_changes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasUnpublishedChanges' }})
    state: Optional[GoogleAppsDriveLabelsV2betaLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
