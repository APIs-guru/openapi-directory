from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import item


@dataclass_json
@dataclass
class DetectedItems:
    items: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    rich_result_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'richResultType' }})
    
