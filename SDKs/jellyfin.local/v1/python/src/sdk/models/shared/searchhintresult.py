from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchHintResult:
    r"""SearchHintResult
    Class SearchHintResult.
    """
    
    search_hints: Optional[List[SearchHint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchHints') }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRecordCount') }})
    
