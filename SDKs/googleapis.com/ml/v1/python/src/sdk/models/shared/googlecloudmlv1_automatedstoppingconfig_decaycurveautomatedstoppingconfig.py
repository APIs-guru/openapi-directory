from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig:
    use_elapsed_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useElapsedTime') }})
    
