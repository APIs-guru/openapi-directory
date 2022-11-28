from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Button:
    r"""Button
    A button. Can be a text button or an image button.
    """
    
    image_button: Optional[ImageButton] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageButton') }})
    text_button: Optional[TextButton] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textButton') }})
    
