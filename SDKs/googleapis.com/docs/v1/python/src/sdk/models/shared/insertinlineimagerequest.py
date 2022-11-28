from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsertInlineImageRequest:
    r"""InsertInlineImageRequest
    Inserts an InlineObject containing an image at the given location.
    """
    
    end_of_segment_location: Optional[EndOfSegmentLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endOfSegmentLocation') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    object_size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectSize') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
