from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuditLoggingSettings:
    r"""AuditLoggingSettings
    Represents the settings for Cloud audit logging
    """
    
    log_admin_read_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logAdminReadActions') }})
    log_data_read_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDataReadActions') }})
    log_data_write_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDataWriteActions') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
