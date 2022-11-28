from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ContextValueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    FATAL = "FATAL"


@dataclass_json
@dataclass
class ContextValue:
    r"""ContextValue
    A message representing context for a KeyRangeInfo, including a label, value, unit, and severity.
    """
    
    label: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    severity: Optional[ContextValueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
