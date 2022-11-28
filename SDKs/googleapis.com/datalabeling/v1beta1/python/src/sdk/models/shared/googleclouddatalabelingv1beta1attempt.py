from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Attempt:
    r"""GoogleCloudDatalabelingV1beta1Attempt
    Records a failed evaluation job run.
    """
    
    attempt_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptTime') }})
    partial_failures: Optional[List[GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialFailures') }})
    
