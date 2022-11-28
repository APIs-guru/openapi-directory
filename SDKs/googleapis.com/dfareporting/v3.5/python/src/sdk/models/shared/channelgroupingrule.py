from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelGroupingRule:
    r"""ChannelGroupingRule
    Represents a DfaReporting channel grouping rule.
    """
    
    disjunctive_match_statements: Optional[List[DisjunctiveMatchStatement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disjunctiveMatchStatements') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
