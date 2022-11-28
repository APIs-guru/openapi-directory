from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum(str, Enum):
    DEFAULT_INCLUSIVE = "DEFAULT_INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"

class EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    FINAL = "FINAL"
    RETRYABLE = "RETRYABLE"
    CANCELED = "CANCELED"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusStatsDimensions:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    enum_filter_type: Optional[EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumFilterType') }})
    error_enum_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorEnumString') }})
    retry_attempt: Optional[EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryAttempt') }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskName') }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskNumber') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    warning_enum_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningEnumString') }})
    workflow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    workflow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowName') }})
    
