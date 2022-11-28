from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseCrmEventbusProtoErrorDetailSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    ERROR = "ERROR"
    WARN = "WARN"
    INFO = "INFO"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoErrorDetail:
    r"""EnterpriseCrmEventbusProtoErrorDetail
    An error, warning, or information message associated with a workflow.
    """
    
    error_code: Optional[CrmlogErrorCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    severity: Optional[EnterpriseCrmEventbusProtoErrorDetailSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    task_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskNumber') }})
    
