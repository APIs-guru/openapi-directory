from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectedRange:
    r"""ProtectedRange
    A protected range.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    editors: Optional[Editors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editors') }})
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeId') }})
    protected_range_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRangeId') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    requesting_user_can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestingUserCanEdit') }})
    unprotected_ranges: Optional[List[GridRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unprotectedRanges') }})
    warning_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningOnly') }})
    
