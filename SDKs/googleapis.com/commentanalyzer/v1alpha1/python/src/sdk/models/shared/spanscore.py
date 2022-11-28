from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpanScore:
    r"""SpanScore
    This is a single score for a given span of text.
    """
    
    begin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    score: Optional[Score] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
