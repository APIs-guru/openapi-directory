from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Verify:
    r"""Verify
    Indicates that the location requires verification. Contains information about the current verification actions performed on the location.
    """
    
    has_pending_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasPendingVerification') }})
    
