from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FilterAction:
    add_label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addLabelIds' }})
    forward: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forward' }})
    remove_label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeLabelIds' }})
    
