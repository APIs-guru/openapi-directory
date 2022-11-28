from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PolicyComplianceStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PENDING_REVIEW = "PENDING_REVIEW"
    DISAPPROVED = "DISAPPROVED"
    APPROVED = "APPROVED"
    CERTIFICATE_REQUIRED = "CERTIFICATE_REQUIRED"


@dataclass_json
@dataclass
class PolicyCompliance:
    r"""PolicyCompliance
    Policy compliance of the creative for a transaction type or a region.
    """
    
    status: Optional[PolicyComplianceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    topics: Optional[List[PolicyTopicEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    
