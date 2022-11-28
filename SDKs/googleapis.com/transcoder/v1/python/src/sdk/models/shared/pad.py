from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Pad:
    r"""Pad
    Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
    """
    
    bottom_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomPixels') }})
    left_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leftPixels') }})
    right_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rightPixels') }})
    top_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topPixels') }})
    
