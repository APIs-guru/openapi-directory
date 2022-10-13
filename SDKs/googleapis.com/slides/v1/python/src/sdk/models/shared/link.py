from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LinkRelativeLinkEnum(str, Enum):
    RELATIVE_SLIDE_LINK_UNSPECIFIED = "RELATIVE_SLIDE_LINK_UNSPECIFIED"
    NEXT_SLIDE = "NEXT_SLIDE"
    PREVIOUS_SLIDE = "PREVIOUS_SLIDE"
    FIRST_SLIDE = "FIRST_SLIDE"
    LAST_SLIDE = "LAST_SLIDE"


@dataclass_json
@dataclass
class Link:
    page_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageObjectId' }})
    relative_link: Optional[LinkRelativeLinkEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeLink' }})
    slide_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slideIndex' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
