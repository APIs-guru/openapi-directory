from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RetrievalImportanceImportanceEnum(str, Enum):
    DEFAULT = "DEFAULT"
    HIGHEST = "HIGHEST"
    HIGH = "HIGH"
    LOW = "LOW"
    NONE = "NONE"


@dataclass_json
@dataclass
class RetrievalImportance:
    importance: Optional[RetrievalImportanceImportanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importance') }})
    
