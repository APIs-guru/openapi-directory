from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3VersionVariantsVariant:
    r"""GoogleCloudDialogflowCxV3VersionVariantsVariant
    A single flow version with specified traffic allocation.
    """
    
    is_control_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isControlGroup') }})
    traffic_allocation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficAllocation') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
