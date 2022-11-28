from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApproveBuildRequestInput:
    r"""ApproveBuildRequestInput
    Request to approve or reject a pending build.
    """
    
    approval_result: Optional[ApprovalResultInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalResult') }})
    
