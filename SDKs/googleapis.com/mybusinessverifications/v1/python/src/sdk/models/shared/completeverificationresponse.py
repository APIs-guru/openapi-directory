from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompleteVerificationResponse:
    r"""CompleteVerificationResponse
    Response message for Verifications.CompleteVerificationAction.
    """
    
    verification: Optional[Verification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    
