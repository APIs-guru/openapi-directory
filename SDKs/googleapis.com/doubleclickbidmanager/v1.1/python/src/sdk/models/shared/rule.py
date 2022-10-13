from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import disjunctivematchstatement


@dataclass_json
@dataclass
class Rule:
    disjunctive_match_statements: Optional[List[disjunctivematchstatement.DisjunctiveMatchStatement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disjunctiveMatchStatements' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
