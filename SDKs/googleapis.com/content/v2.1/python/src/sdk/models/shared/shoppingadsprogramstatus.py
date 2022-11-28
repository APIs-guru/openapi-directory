from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ShoppingAdsProgramStatusGlobalStateEnum(str, Enum):
    PROGRAM_STATE_UNSPECIFIED = "PROGRAM_STATE_UNSPECIFIED"
    NOT_ENABLED = "NOT_ENABLED"
    NO_OFFERS_UPLOADED = "NO_OFFERS_UPLOADED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class ShoppingAdsProgramStatus:
    r"""ShoppingAdsProgramStatus
    Response message for GetShoppingAdsProgramStatus.
    """
    
    global_state: Optional[ShoppingAdsProgramStatusGlobalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalState') }})
    region_statuses: Optional[List[ShoppingAdsProgramStatusRegionStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionStatuses') }})
    
