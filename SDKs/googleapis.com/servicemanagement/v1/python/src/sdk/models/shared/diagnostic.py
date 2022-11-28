from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DiagnosticKindEnum(str, Enum):
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class Diagnostic:
    r"""Diagnostic
    Represents a diagnostic message (error or warning)
    """
    
    kind: Optional[DiagnosticKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
