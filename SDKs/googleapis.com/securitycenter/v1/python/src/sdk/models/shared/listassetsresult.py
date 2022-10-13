from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import asset

class ListAssetsResultStateChangeEnum(str, Enum):
    UNUSED = "UNUSED"
    ADDED = "ADDED"
    REMOVED = "REMOVED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class ListAssetsResult:
    asset: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    state_change: Optional[ListAssetsResultStateChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChange' }})
    
