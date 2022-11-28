from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaSuspensionStateEnum(str, Enum):
    RESOLUTION_STATE_UNSPECIFIED = "RESOLUTION_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    REJECTED = "REJECTED"
    LIFTED = "LIFTED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspension:
    r"""GoogleCloudIntegrationsV1alphaSuspension
    A record representing a suspension.
    """
    
    approval_config: Optional[GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalConfig') }})
    audit: Optional[GoogleCloudIntegrationsV1alphaSuspensionAudit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audit') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventExecutionInfoId') }})
    integration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integration') }})
    last_modify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifyTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudIntegrationsV1alphaSuspensionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    suspension_config: Optional[EnterpriseCrmEventbusProtoSuspensionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionConfig') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    

@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionInput:
    r"""GoogleCloudIntegrationsV1alphaSuspensionInput
    A record representing a suspension.
    """
    
    approval_config: Optional[GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalConfig') }})
    audit: Optional[GoogleCloudIntegrationsV1alphaSuspensionAudit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audit') }})
    event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventExecutionInfoId') }})
    integration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudIntegrationsV1alphaSuspensionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    suspension_config: Optional[EnterpriseCrmEventbusProtoSuspensionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionConfig') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    
