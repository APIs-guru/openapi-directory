from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Process:
    processing_algorithm: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_algorithm') }})
    crop: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop') }})
    flip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flip') }})
    mirror: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirror') }})
    resize: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resize') }})
    rotate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotate') }})
    
