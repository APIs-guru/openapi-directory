from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import negativekeyword


@dataclass_json
@dataclass
class ReplaceNegativeKeywordsRequest:
    new_negative_keywords: Optional[List[negativekeyword.NegativeKeyword]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newNegativeKeywords' }})
    
