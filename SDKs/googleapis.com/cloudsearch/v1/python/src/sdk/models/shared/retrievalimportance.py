from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RetrievalImportanceImportanceEnum(str, Enum):
    DEFAULT = "DEFAULT"
    HIGHEST = "HIGHEST"
    HIGH = "HIGH"
    LOW = "LOW"
    NONE = "NONE"


@dataclass_json
@dataclass
class RetrievalImportance:
    importance: Optional[RetrievalImportanceImportanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importance' }})
    
