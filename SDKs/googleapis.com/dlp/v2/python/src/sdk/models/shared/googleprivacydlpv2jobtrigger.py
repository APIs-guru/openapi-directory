from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2JobTriggerStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    PAUSED = "PAUSED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2JobTriggerInput:
    r"""GooglePrivacyDlpV2JobTriggerInput
    Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    inspect_job: Optional[GooglePrivacyDlpV2InspectJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectJob') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[GooglePrivacyDlpV2JobTriggerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    triggers: Optional[List[GooglePrivacyDlpV2Trigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    

@dataclass_json
@dataclass
class GooglePrivacyDlpV2JobTrigger:
    r"""GooglePrivacyDlpV2JobTrigger
    Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    errors: Optional[List[GooglePrivacyDlpV2Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inspect_job: Optional[GooglePrivacyDlpV2InspectJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectJob') }})
    last_run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[GooglePrivacyDlpV2JobTriggerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    triggers: Optional[List[GooglePrivacyDlpV2Trigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
