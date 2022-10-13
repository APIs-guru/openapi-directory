from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tag:
    finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerPrint' }})
    items: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
