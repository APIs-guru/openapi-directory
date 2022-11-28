from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Thumbnail:
    r"""Thumbnail
    A single thumbnail, with its size and format.
    """
    
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    height_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heightPx') }})
    width_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widthPx') }})
    
