from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import asset

class ListAssetsResultStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    UNUSED = "UNUSED"
    ADDED = "ADDED"
    REMOVED = "REMOVED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class ListAssetsResult:
    asset: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    state: Optional[ListAssetsResultStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
