from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sectioncolumnproperties
from . import dimension
from . import dimension
from . import dimension
from . import dimension
from . import dimension
from . import dimension

class SectionStyleColumnSeparatorStyleEnum(str, Enum):
    COLUMN_SEPARATOR_STYLE_UNSPECIFIED = "COLUMN_SEPARATOR_STYLE_UNSPECIFIED"
    NONE = "NONE"
    BETWEEN_EACH_COLUMN = "BETWEEN_EACH_COLUMN"

class SectionStyleContentDirectionEnum(str, Enum):
    CONTENT_DIRECTION_UNSPECIFIED = "CONTENT_DIRECTION_UNSPECIFIED"
    LEFT_TO_RIGHT = "LEFT_TO_RIGHT"
    RIGHT_TO_LEFT = "RIGHT_TO_LEFT"

class SectionStyleSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    CONTINUOUS = "CONTINUOUS"
    NEXT_PAGE = "NEXT_PAGE"


@dataclass_json
@dataclass
class SectionStyle:
    column_properties: Optional[List[sectioncolumnproperties.SectionColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnProperties' }})
    column_separator_style: Optional[SectionStyleColumnSeparatorStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSeparatorStyle' }})
    content_direction: Optional[SectionStyleContentDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDirection' }})
    default_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultFooterId' }})
    default_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultHeaderId' }})
    even_page_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evenPageFooterId' }})
    even_page_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evenPageHeaderId' }})
    first_page_footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPageFooterId' }})
    first_page_header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPageHeaderId' }})
    margin_bottom: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginBottom' }})
    margin_footer: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginFooter' }})
    margin_header: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginHeader' }})
    margin_left: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginLeft' }})
    margin_right: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginRight' }})
    margin_top: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginTop' }})
    page_number_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumberStart' }})
    section_type: Optional[SectionStyleSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionType' }})
    use_first_page_header_footer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useFirstPageHeaderFooter' }})
    
