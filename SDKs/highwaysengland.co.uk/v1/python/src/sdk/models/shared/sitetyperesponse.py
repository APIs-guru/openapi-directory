from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SiteTypeResponse:
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_count') }})
    sitetypes: Optional[List[SiteType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitetypes') }})
    
