from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListJobTriggersResponse:
    r"""GooglePrivacyDlpV2ListJobTriggersResponse
    Response message for ListJobTriggers.
    """
    
    job_triggers: Optional[List[GooglePrivacyDlpV2JobTrigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTriggers') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
