from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OnPremDomainSidDetailsSidFilteringStateEnum(str, Enum):
    SID_FILTERING_STATE_UNSPECIFIED = "SID_FILTERING_STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class OnPremDomainSidDetails:
    r"""OnPremDomainSidDetails
    OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sid_filtering_state: Optional[OnPremDomainSidDetailsSidFilteringStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sidFilteringState') }})
    
