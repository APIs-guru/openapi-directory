from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextRun:
    r"""TextRun
    A TextElement kind that represents a run of text that all has the same styling.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    
