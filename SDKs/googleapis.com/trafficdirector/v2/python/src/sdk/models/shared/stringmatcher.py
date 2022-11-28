from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StringMatcher:
    r"""StringMatcher
    Specifies the way to match a string. [#next-free-field: 7]
    """
    
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    ignore_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreCase') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    safe_regex: Optional[RegexMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safeRegex') }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    
