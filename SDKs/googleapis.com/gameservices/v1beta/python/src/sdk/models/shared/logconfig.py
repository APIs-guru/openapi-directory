from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogConfig:
    r"""LogConfig
    Specifies what kind of log the caller must write
    """
    
    cloud_audit: Optional[CloudAuditOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudAudit') }})
    counter: Optional[CounterOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counter') }})
    data_access: Optional[DataAccessOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataAccess') }})
    
