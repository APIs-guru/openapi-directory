from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSlideRequest:
    r"""CreateSlideRequest
    Creates a slide.
    """
    
    insertion_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionIndex') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    placeholder_id_mappings: Optional[List[LayoutPlaceholderIDMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeholderIdMappings') }})
    slide_layout_reference: Optional[LayoutReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slideLayoutReference') }})
    
