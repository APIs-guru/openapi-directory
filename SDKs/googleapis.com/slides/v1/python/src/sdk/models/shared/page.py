from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PagePageTypeEnum(str, Enum):
    SLIDE = "SLIDE"
    MASTER = "MASTER"
    LAYOUT = "LAYOUT"
    NOTES = "NOTES"
    NOTES_MASTER = "NOTES_MASTER"


@dataclass_json
@dataclass
class Page:
    r"""Page
    A page in a presentation.
    """
    
    layout_properties: Optional[LayoutProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutProperties') }})
    master_properties: Optional[MasterProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterProperties') }})
    notes_properties: Optional[NotesProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notesProperties') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    page_elements: Optional[List[PageElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageElements') }})
    page_properties: Optional[PageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageProperties') }})
    page_type: Optional[PagePageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageType') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    slide_properties: Optional[SlideProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slideProperties') }})
    
