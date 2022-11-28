from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacementTag:
    r"""PlacementTag
    Placement Tag
    """
    
    placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementId') }})
    tag_datas: Optional[List[TagData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagDatas') }})
    
