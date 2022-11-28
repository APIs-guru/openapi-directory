from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextButton:
    r"""TextButton
    A button with text and onclick action.
    """
    
    on_click: Optional[OnClick] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClick') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
