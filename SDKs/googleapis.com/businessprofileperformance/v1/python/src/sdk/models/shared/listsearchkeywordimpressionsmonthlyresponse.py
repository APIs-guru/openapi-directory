from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSearchKeywordImpressionsMonthlyResponse:
    r"""ListSearchKeywordImpressionsMonthlyResponse
    Represents the response for ListSearchKeywordImpressionsMonthly.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    search_keywords_counts: Optional[List[SearchKeywordCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchKeywordsCounts') }})
    
