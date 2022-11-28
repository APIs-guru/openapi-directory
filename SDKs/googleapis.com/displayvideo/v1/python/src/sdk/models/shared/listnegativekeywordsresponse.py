from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNegativeKeywordsResponse:
    r"""ListNegativeKeywordsResponse
    Response message for NegativeKeywordService.ListNegativeKeywords.
    """
    
    negative_keywords: Optional[List[NegativeKeyword]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywords') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
