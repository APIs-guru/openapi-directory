from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import negativekeyword


@dataclass_json
@dataclass
class BulkEditNegativeKeywordsRequest:
    created_negative_keywords: Optional[List[negativekeyword.NegativeKeyword]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdNegativeKeywords' }})
    deleted_negative_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedNegativeKeywords' }})
    
