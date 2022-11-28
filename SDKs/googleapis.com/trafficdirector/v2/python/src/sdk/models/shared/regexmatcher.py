from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegexMatcher:
    r"""RegexMatcher
    A regex matcher designed for safety when used with untrusted input.
    """
    
    google_re2: Optional[GoogleRe2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleRe2') }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    
