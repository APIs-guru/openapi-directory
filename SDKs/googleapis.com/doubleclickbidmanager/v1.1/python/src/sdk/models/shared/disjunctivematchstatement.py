from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DisjunctiveMatchStatement:
    r"""DisjunctiveMatchStatement
    DisjunctiveMatchStatement that OR's all contained filters.
    """
    
    event_filters: Optional[List[EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    
