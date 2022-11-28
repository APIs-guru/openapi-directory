from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IssueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    DEPRECATION = "DEPRECATION"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class Issue:
    r"""Issue
    Issues include warnings, errors, and deprecation notices.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    severity: Optional[IssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    source_position: Optional[SourcePosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePosition') }})
    
