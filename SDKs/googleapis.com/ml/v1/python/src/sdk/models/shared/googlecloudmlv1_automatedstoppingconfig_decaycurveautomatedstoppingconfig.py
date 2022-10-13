from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig:
    use_elapsed_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useElapsedTime' }})
    
