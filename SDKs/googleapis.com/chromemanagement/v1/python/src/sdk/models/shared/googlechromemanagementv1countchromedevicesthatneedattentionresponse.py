from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse:
    r"""GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
    Response containing counts for devices that need attention.
    """
    
    no_recent_policy_sync_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRecentPolicySyncCount') }})
    no_recent_user_activity_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRecentUserActivityCount') }})
    os_version_not_compliant_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersionNotCompliantCount') }})
    pending_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingUpdate') }})
    unsupported_policy_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unsupportedPolicyCount') }})
    
