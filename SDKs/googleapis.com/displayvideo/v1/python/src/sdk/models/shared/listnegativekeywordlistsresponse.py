from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNegativeKeywordListsResponse:
    r"""ListNegativeKeywordListsResponse
    Response message for NegativeKeywordListService.ListNegativeKeywordLists.
    """
    
    negative_keyword_lists: Optional[List[NegativeKeywordList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywordLists') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
