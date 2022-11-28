from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigurationStatus:
    r"""ConfigurationStatus
    ConfigurationStatus communicates the observed state of the Configuration (from the controller).
    """
    
    conditions: Optional[List[GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    latest_created_revision_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCreatedRevisionName') }})
    latest_ready_revision_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestReadyRevisionName') }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    
