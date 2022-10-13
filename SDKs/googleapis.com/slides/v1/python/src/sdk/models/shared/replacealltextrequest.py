from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import substringmatchcriteria


@dataclass_json
@dataclass
class ReplaceAllTextRequest:
    contains_text: Optional[substringmatchcriteria.SubstringMatchCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containsText' }})
    page_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageObjectIds' }})
    replace_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceText' }})
    
