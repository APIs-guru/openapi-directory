from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IntentFilter:
    action_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionNames' }})
    category_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryNames' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
