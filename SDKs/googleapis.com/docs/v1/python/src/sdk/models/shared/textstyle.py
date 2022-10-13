from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import optionalcolor
from . import dimension
from . import optionalcolor
from . import link
from . import weightedfontfamily

class TextStyleBaselineOffsetEnum(str, Enum):
    BASELINE_OFFSET_UNSPECIFIED = "BASELINE_OFFSET_UNSPECIFIED"
    NONE = "NONE"
    SUPERSCRIPT = "SUPERSCRIPT"
    SUBSCRIPT = "SUBSCRIPT"


@dataclass_json
@dataclass
class TextStyle:
    background_color: Optional[optionalcolor.OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    baseline_offset: Optional[TextStyleBaselineOffsetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baselineOffset' }})
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    font_size: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontSize' }})
    foreground_color: Optional[optionalcolor.OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foregroundColor' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    link: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    small_caps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smallCaps' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    weighted_font_family: Optional[weightedfontfamily.WeightedFontFamily] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightedFontFamily' }})
    
