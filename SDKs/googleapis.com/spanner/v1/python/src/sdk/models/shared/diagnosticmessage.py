from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DiagnosticMessageSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    FATAL = "FATAL"


@dataclass_json
@dataclass
class DiagnosticMessage:
    r"""DiagnosticMessage
    A message representing the key visualizer diagnostic messages.
    """
    
    info: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    metric: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    metric_specific: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricSpecific') }})
    severity: Optional[DiagnosticMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    short_message: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortMessage') }})
    
