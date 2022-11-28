from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Image:
    r"""Image
    An image that is specified by a URL and can have an onclick action.
    """
    
    aspect_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectRatio') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    on_click: Optional[OnClick] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClick') }})
    
