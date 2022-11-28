from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ForecastOptimalParametersResponse:
    alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha') }})
    beta: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beta') }})
    gamma: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gamma') }})
    
