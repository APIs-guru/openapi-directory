from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DuplicateObjectRequest:
    r"""DuplicateObjectRequest
    Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.
    """
    
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    object_ids: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIds') }})
    
