from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layoutId' }})
    predefined_layout: Optional[LayoutReferencePredefinedLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedLayout' }})
    
