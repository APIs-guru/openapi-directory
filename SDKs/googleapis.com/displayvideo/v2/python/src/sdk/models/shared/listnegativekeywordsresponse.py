from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import negativekeyword


@dataclass_json
@dataclass
class ListNegativeKeywordsResponse:
    negative_keywords: Optional[List[negativekeyword.NegativeKeyword]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeKeywords' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
