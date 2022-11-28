from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PageElement:
    r"""PageElement
    A visual element rendered on a page.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    element_group: Optional[Group] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementGroup') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    line: Optional[Line] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    shape: Optional[Shape] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shape') }})
    sheets_chart: Optional[SheetsChart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetsChart') }})
    size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    table: Optional[Table] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    transform: Optional[AffineTransform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transform') }})
    video: Optional[Video] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    word_art: Optional[WordArt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordArt') }})
    
