from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StructuredQuery:
    r"""StructuredQuery
    A Firestore query.
    """
    
    end_at: Optional[Cursor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endAt') }})
    from_: Optional[List[CollectionSelector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_by: Optional[List[Order]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    select: Optional[Projection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    start_at: Optional[Cursor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startAt') }})
    where: Optional[Filter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('where') }})
    
