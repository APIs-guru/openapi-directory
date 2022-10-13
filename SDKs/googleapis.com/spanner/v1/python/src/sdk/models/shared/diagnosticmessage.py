from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import localizedstring
from . import localizedstring
from . import localizedstring

class DiagnosticMessageSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    FATAL = "FATAL"


@dataclass_json
@dataclass
class DiagnosticMessage:
    info: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    metric: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    metric_specific: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricSpecific' }})
    severity: Optional[DiagnosticMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    short_message: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortMessage' }})
    
