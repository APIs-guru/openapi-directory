from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import negativekeywordlist


@dataclass_json
@dataclass
class ListNegativeKeywordListsResponse:
    negative_keyword_lists: Optional[List[negativekeywordlist.NegativeKeywordList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeKeywordLists' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
