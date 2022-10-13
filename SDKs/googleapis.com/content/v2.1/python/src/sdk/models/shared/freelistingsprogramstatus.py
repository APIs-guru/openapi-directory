from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import freelistingsprogramstatusregionstatus

class FreeListingsProgramStatusGlobalStateEnum(str, Enum):
    PROGRAM_STATE_UNSPECIFIED = "PROGRAM_STATE_UNSPECIFIED"
    NOT_ENABLED = "NOT_ENABLED"
    NO_OFFERS_UPLOADED = "NO_OFFERS_UPLOADED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class FreeListingsProgramStatus:
    global_state: Optional[FreeListingsProgramStatusGlobalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'globalState' }})
    region_statuses: Optional[List[freelistingsprogramstatusregionstatus.FreeListingsProgramStatusRegionStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionStatuses' }})
    
