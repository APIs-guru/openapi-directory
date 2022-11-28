from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateJobTriggerRequestInput:
    r"""GooglePrivacyDlpV2CreateJobTriggerRequestInput
    Request message for CreateJobTrigger.
    """
    
    job_trigger: Optional[GooglePrivacyDlpV2JobTriggerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTrigger') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    
