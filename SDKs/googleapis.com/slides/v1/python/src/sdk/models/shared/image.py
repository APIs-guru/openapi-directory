from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Image:
    r"""Image
    A PageElement kind representing an image.
    """
    
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUrl') }})
    image_properties: Optional[ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageProperties') }})
    placeholder: Optional[Placeholder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeholder') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    
