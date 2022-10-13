from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import disjunctivematchstatement


@dataclass_json
@dataclass
class ChannelGroupingRule:
    disjunctive_match_statements: Optional[List[disjunctivematchstatement.DisjunctiveMatchStatement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disjunctiveMatchStatements' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
