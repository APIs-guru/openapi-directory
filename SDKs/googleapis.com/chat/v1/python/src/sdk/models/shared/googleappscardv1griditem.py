from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1imagecomponent

class GoogleAppsCardV1GridItemLayoutEnum(str, Enum):
    GRID_ITEM_LAYOUT_UNSPECIFIED = "GRID_ITEM_LAYOUT_UNSPECIFIED"
    TEXT_BELOW = "TEXT_BELOW"
    TEXT_ABOVE = "TEXT_ABOVE"

class GoogleAppsCardV1GridItemTextAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGNMENT_UNSPECIFIED = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    START = "START"
    CENTER = "CENTER"
    END = "END"


@dataclass_json
@dataclass
class GoogleAppsCardV1GridItem:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[googleappscardv1imagecomponent.GoogleAppsCardV1ImageComponent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    layout: Optional[GoogleAppsCardV1GridItemLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    text_alignment: Optional[GoogleAppsCardV1GridItemTextAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAlignment' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
