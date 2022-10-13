from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuditLoggingSettings:
    log_admin_read_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logAdminReadActions' }})
    log_data_read_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logDataReadActions' }})
    log_data_write_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logDataWriteActions' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    
