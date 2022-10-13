from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import crmlogerrorcode

class EnterpriseCrmEventbusProtoErrorDetailSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    ERROR = "ERROR"
    WARN = "WARN"
    INFO = "INFO"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoErrorDetail:
    error_code: Optional[crmlogerrorcode.CrmlogErrorCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    severity: Optional[EnterpriseCrmEventbusProtoErrorDetailSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    task_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskNumber' }})
    
