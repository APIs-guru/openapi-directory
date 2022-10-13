from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse:
    no_recent_policy_sync_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noRecentPolicySyncCount' }})
    no_recent_user_activity_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noRecentUserActivityCount' }})
    os_version_not_compliant_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersionNotCompliantCount' }})
    pending_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingUpdate' }})
    unsupported_policy_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unsupportedPolicyCount' }})
    
