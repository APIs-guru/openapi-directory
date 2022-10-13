from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ThirdPartyLinkStatusLinkStatusEnum(str, Enum):
    UNKNOWN = "unknown"
    FAILED = "failed"
    PENDING = "pending"
    LINKED = "linked"


@dataclass_json
@dataclass
class ThirdPartyLinkStatus:
    link_status: Optional[ThirdPartyLinkStatusLinkStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkStatus' }})
    
