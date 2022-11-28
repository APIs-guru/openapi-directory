from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Trigger:
    r"""GoogleCloudDataplexV1Trigger
    DataScan scheduling and trigger settings.
    """
    
    on_demand: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onDemand') }})
    schedule: Optional[GoogleCloudDataplexV1TriggerSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
