from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import text


@dataclass_json
@dataclass
class TextList:
    values: Optional[List[text.Text]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
