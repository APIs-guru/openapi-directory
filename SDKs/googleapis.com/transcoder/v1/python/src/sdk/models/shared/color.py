from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Color:
    r"""Color
    Color preprocessing configuration. **Note:** This configuration is not supported.
    """
    
    brightness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brightness') }})
    contrast: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contrast') }})
    saturation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturation') }})
    
