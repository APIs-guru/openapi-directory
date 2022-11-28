from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SourceScoringConfigSourceImportanceEnum(str, Enum):
    DEFAULT = "DEFAULT"
    LOW = "LOW"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class SourceScoringConfig:
    r"""SourceScoringConfig
    Set the scoring configuration. This allows modifying the ranking of results for a source.
    """
    
    source_importance: Optional[SourceScoringConfigSourceImportanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceImportance') }})
    
