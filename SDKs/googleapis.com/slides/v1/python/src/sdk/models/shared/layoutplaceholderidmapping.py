from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LayoutPlaceholderIDMapping:
    r"""LayoutPlaceholderIDMapping
    The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.
    """
    
    layout_placeholder: Optional[Placeholder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutPlaceholder') }})
    layout_placeholder_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutPlaceholderObjectId') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
