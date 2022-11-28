from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Query:
    r"""Query
    A query for entities.
    """
    
    distinct_on: Optional[List[PropertyReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distinctOn') }})
    end_cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endCursor') }})
    filter: Optional[Filter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    kind: Optional[List[KindExpression]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order: Optional[List[PropertyOrder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    projection: Optional[List[Projection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    start_cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startCursor') }})
    
