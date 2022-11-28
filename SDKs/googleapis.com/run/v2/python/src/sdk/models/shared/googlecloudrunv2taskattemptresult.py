from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2TaskAttemptResult:
    r"""GoogleCloudRunV2TaskAttemptResult
    Result of a task attempt.
    """
    
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    status: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
