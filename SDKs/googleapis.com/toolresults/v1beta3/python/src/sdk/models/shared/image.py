from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Image:
    r"""Image
    An image, with a link to the main image and a thumbnail.
    """
    
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    source_image: Optional[ToolOutputReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceImage') }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    thumbnail: Optional[Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    
