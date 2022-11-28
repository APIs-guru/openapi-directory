from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Image:
    r"""Image
    Data representing an image.
    """
    
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUri') }})
    properties: Optional[MediaProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUri') }})
    

@dataclass_json
@dataclass
class ImageInput:
    r"""ImageInput
    Data representing an image.
    """
    
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    properties: Optional[MediaProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUri') }})
    
