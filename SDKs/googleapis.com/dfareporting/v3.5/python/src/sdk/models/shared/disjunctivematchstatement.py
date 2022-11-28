from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DisjunctiveMatchStatement:
    r"""DisjunctiveMatchStatement
    Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
    """
    
    event_filters: Optional[List[EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
