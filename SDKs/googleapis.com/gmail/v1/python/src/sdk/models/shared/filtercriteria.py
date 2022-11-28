from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FilterCriteriaSizeComparisonEnum(str, Enum):
    UNSPECIFIED = "unspecified"
    SMALLER = "smaller"
    LARGER = "larger"


@dataclass_json
@dataclass
class FilterCriteria:
    r"""FilterCriteria
    Message matching criteria.
    """
    
    exclude_chats: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeChats') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    has_attachment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasAttachment') }})
    negated_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negatedQuery') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    size_comparison: Optional[FilterCriteriaSizeComparisonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeComparison') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
