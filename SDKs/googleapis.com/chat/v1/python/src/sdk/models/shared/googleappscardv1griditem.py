from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsCardV1GridItemLayoutEnum(str, Enum):
    GRID_ITEM_LAYOUT_UNSPECIFIED = "GRID_ITEM_LAYOUT_UNSPECIFIED"
    TEXT_BELOW = "TEXT_BELOW"
    TEXT_ABOVE = "TEXT_ABOVE"


@dataclass_json
@dataclass
class GoogleAppsCardV1GridItem:
    r"""GoogleAppsCardV1GridItem
    Represents a single item in the grid layout.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[GoogleAppsCardV1ImageComponent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    layout: Optional[GoogleAppsCardV1GridItemLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
