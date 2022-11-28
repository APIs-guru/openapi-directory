from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegionProto:
    r"""RegionProto
    A rectangular region.
    """
    
    height_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heightPx') }})
    left_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leftPx') }})
    top_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topPx') }})
    width_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widthPx') }})
    
