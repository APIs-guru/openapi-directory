from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OnPremDomainSidDetailsSidFilteringStateEnum(str, Enum):
    SID_FILTERING_STATE_UNSPECIFIED = "SID_FILTERING_STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class OnPremDomainSidDetails:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sid_filtering_state: Optional[OnPremDomainSidDetailsSidFilteringStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sidFilteringState' }})
    
