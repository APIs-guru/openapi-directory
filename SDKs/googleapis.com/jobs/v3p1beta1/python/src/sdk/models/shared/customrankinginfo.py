from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CustomRankingInfoImportanceLevelEnum(str, Enum):
    IMPORTANCE_LEVEL_UNSPECIFIED = "IMPORTANCE_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    LOW = "LOW"
    MILD = "MILD"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    EXTREME = "EXTREME"


@dataclass_json
@dataclass
class CustomRankingInfo:
    importance_level: Optional[CustomRankingInfoImportanceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importanceLevel' }})
    ranking_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rankingExpression' }})
    
