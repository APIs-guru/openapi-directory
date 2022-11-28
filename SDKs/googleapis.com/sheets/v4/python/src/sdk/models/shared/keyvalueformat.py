from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeyValueFormat:
    r"""KeyValueFormat
    Formatting options for key value.
    """
    
    position: Optional[TextPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    text_format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    
