from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageItemInput:
    r"""ImageItemInput
    An item containing an image.
    """
    
    image: Optional[ImageInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    

@dataclass_json
@dataclass
class ImageItem:
    r"""ImageItem
    An item containing an image.
    """
    
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
