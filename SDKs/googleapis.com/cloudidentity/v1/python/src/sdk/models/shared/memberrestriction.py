from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import restrictionevaluation


@dataclass_json
@dataclass
class MemberRestriction:
    evaluation: Optional[restrictionevaluation.RestrictionEvaluation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluation' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
