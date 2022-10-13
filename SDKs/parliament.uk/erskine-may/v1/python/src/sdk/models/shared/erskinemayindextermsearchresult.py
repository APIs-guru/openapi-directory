from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErskineMayIndexTermSearchResult:
    display_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAs' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    see_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seeValue' }})
    
