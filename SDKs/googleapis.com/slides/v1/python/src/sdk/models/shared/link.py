from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LinkRelativeLinkEnum(str, Enum):
    RELATIVE_SLIDE_LINK_UNSPECIFIED = "RELATIVE_SLIDE_LINK_UNSPECIFIED"
    NEXT_SLIDE = "NEXT_SLIDE"
    PREVIOUS_SLIDE = "PREVIOUS_SLIDE"
    FIRST_SLIDE = "FIRST_SLIDE"
    LAST_SLIDE = "LAST_SLIDE"


@dataclass_json
@dataclass
class Link:
    r"""Link
    A hypertext link.
    """
    
    page_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageObjectId') }})
    relative_link: Optional[LinkRelativeLinkEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeLink') }})
    slide_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slideIndex') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
