from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerSettings:
    r"""CustomerSettings
    Represents settings at a customer level.
    """
    
    audit_logging_settings: Optional[AuditLoggingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditLoggingSettings') }})
    vpc_settings: Optional[VpcSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcSettings') }})
    
