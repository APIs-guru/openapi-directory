from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import auditloggingsettings
from . import vpcsettings


@dataclass_json
@dataclass
class CustomerSettings:
    audit_logging_settings: Optional[auditloggingsettings.AuditLoggingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLoggingSettings' }})
    vpc_settings: Optional[vpcsettings.VpcSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcSettings' }})
    
