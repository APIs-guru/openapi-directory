from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ThirdPartyLinkStatusLinkStatusEnum(str, Enum):
    UNKNOWN = "unknown"
    FAILED = "failed"
    PENDING = "pending"
    LINKED = "linked"


@dataclass_json
@dataclass
class ThirdPartyLinkStatus:
    r"""ThirdPartyLinkStatus
    The third-party link status object contains information about the status of the link.
    """
    
    link_status: Optional[ThirdPartyLinkStatusLinkStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkStatus') }})
    
