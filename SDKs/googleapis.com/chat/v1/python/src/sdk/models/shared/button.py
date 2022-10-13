from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagebutton
from . import textbutton


@dataclass_json
@dataclass
class Button:
    image_button: Optional[imagebutton.ImageButton] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageButton' }})
    text_button: Optional[textbutton.TextButton] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textButton' }})
    
