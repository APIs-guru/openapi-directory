from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThemeMediaResult:
    r"""ThemeMediaResult
    Class ThemeMediaResult.
    """
    
    items: Optional[List[BaseItemDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartIndex') }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRecordCount') }})
    
