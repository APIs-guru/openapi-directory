from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import localizedstring

class ContextValueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    FATAL = "FATAL"


@dataclass_json
@dataclass
class ContextValue:
    label: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    severity: Optional[ContextValueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
