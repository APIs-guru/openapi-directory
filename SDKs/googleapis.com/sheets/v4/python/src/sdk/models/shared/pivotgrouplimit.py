from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PivotGroupLimit:
    r"""PivotGroupLimit
    The count limit on rows or columns in the pivot group.
    """
    
    apply_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyOrder') }})
    count_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countLimit') }})
    
