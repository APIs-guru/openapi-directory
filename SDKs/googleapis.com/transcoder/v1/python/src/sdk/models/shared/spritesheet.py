from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SpriteSheet:
    r"""SpriteSheet
    Sprite sheet configuration.
    """
    
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnCount') }})
    end_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeOffset') }})
    file_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePrefix') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    quality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    sprite_height_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spriteHeightPixels') }})
    sprite_width_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spriteWidthPixels') }})
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeOffset') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
