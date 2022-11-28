from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlideProperties:
    r"""SlideProperties
    The properties of Page that are only relevant for pages with page_type SLIDE.
    """
    
    is_skipped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSkipped') }})
    layout_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutObjectId') }})
    master_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterObjectId') }})
    notes_page: Optional[Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notesPage') }})
    
