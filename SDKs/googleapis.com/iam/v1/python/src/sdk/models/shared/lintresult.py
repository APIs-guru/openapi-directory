from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LintResultLevelEnum(str, Enum):
    LEVEL_UNSPECIFIED = "LEVEL_UNSPECIFIED"
    CONDITION = "CONDITION"

class LintResultSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    ERROR = "ERROR"
    WARNING = "WARNING"
    NOTICE = "NOTICE"
    INFO = "INFO"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclass
class LintResult:
    debug_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugMessage' }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    level: Optional[LintResultLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    location_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationOffset' }})
    severity: Optional[LintResultSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    validation_unit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationUnitName' }})
    
