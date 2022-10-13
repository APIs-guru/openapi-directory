from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubstringMatchCriteria:
    match_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchCase' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
