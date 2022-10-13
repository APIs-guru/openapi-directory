from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SourceScoringConfigSourceImportanceEnum(str, Enum):
    DEFAULT = "DEFAULT"
    LOW = "LOW"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class SourceScoringConfig:
    source_importance: Optional[SourceScoringConfigSourceImportanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceImportance' }})
    
