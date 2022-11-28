from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplaceAllTextRequest:
    r"""ReplaceAllTextRequest
    Replaces all instances of text matching a criteria with replace text.
    """
    
    contains_text: Optional[SubstringMatchCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsText') }})
    replace_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceText') }})
    
