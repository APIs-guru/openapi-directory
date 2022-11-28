from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Rule:
    r"""Rule
    A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied.
    """
    
    disjunctive_match_statements: Optional[List[DisjunctiveMatchStatement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disjunctiveMatchStatements') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
