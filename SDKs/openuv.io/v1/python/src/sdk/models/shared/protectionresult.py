from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProtectionResult:
    ozone: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ozone') }})
    ozone_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ozone_time') }})
    uv: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uv') }})
    uv_max: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uv_max') }})
    uv_max_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uv_max_time') }})
    uv_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uv_time') }})
    
