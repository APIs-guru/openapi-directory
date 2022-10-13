from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphasuspensionapprovalconfig
from . import googlecloudintegrationsv1alphasuspensionaudit
from . import enterprisecrmeventbusprotosuspensionconfig

class GoogleCloudIntegrationsV1alphaSuspensionStateEnum(str, Enum):
    RESOLUTION_STATE_UNSPECIFIED = "RESOLUTION_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    REJECTED = "REJECTED"
    LIFTED = "LIFTED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspension:
    approval_config: Optional[googlecloudintegrationsv1alphasuspensionapprovalconfig.GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalConfig' }})
    audit: Optional[googlecloudintegrationsv1alphasuspensionaudit.GoogleCloudIntegrationsV1alphaSuspensionAudit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audit' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionInfoId' }})
    integration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integration' }})
    last_modify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifyTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudIntegrationsV1alphaSuspensionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    suspension_config: Optional[enterprisecrmeventbusprotosuspensionconfig.EnterpriseCrmEventbusProtoSuspensionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensionConfig' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    
