from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentStyle:
    r"""GoogleCloudDocumentaiV1DocumentStyle
    Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
    """
    
    background_color: Optional[GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    color: Optional[GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontFamily') }})
    font_size: Optional[GoogleCloudDocumentaiV1DocumentStyleFontSize] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontSize') }})
    font_weight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontWeight') }})
    text_anchor: Optional[GoogleCloudDocumentaiV1DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnchor') }})
    text_decoration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDecoration') }})
    text_style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    
