from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateImageRequest:
    r"""CreateImageRequest
    Creates an image.
    """
    
    element_properties: Optional[PageElementProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementProperties') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
