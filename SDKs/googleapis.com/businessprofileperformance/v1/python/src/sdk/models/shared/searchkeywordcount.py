from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchKeywordCount:
    r"""SearchKeywordCount
    Represents a single search keyword and its value.
    """
    
    insights_value: Optional[InsightsValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insightsValue') }})
    search_keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchKeyword') }})
    
