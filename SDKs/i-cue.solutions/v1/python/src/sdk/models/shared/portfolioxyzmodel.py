from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PortfolioXyzModel:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    threshold_x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdX') }})
    threshold_y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdY') }})
    threshold_z: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdZ') }})
    xyz12: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyz12') }})
    xyz12_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyz12Value') }})
    xyz6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyz6') }})
    xyz6_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyz6Value') }})
    xyz9: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyz9') }})
    xyz9_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyz9Value') }})
    
