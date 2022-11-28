from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LayoutReferencePredefinedLayoutEnum(str, Enum):
    PREDEFINED_LAYOUT_UNSPECIFIED = "PREDEFINED_LAYOUT_UNSPECIFIED"
    BLANK = "BLANK"
    CAPTION_ONLY = "CAPTION_ONLY"
    TITLE = "TITLE"
    TITLE_AND_BODY = "TITLE_AND_BODY"
    TITLE_AND_TWO_COLUMNS = "TITLE_AND_TWO_COLUMNS"
    TITLE_ONLY = "TITLE_ONLY"
    SECTION_HEADER = "SECTION_HEADER"
    SECTION_TITLE_AND_DESCRIPTION = "SECTION_TITLE_AND_DESCRIPTION"
    ONE_COLUMN_TEXT = "ONE_COLUMN_TEXT"
    MAIN_POINT = "MAIN_POINT"
    BIG_NUMBER = "BIG_NUMBER"


@dataclass_json
@dataclass
class LayoutReference:
    r"""LayoutReference
    Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.
    """
    
    layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutId') }})
    predefined_layout: Optional[LayoutReferencePredefinedLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedLayout') }})
    
