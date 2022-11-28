from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeyRangeInfos:
    r"""KeyRangeInfos
    A message representing a list of specific information for multiple key ranges.
    """
    
    infos: Optional[List[KeyRangeInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infos') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
