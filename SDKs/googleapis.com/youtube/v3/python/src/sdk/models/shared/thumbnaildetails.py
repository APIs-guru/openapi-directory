from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThumbnailDetails:
    r"""ThumbnailDetails
    Internal representation of thumbnails for a YouTube resource.
    """
    
    high: Optional[Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    maxres: Optional[Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxres') }})
    medium: Optional[Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    standard: Optional[Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standard') }})
    
