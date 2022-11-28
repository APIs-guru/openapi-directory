from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PortfolioAbcModel:
    abc12: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abc12') }})
    abc12_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abc12Value') }})
    abc6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abc6') }})
    abc6_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abc6Value') }})
    abc9: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abc9') }})
    abc9_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abc9Value') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    threshold_a: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdA') }})
    threshold_b: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdB') }})
    threshold_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdC') }})
    
