from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rule


@dataclass_json
@dataclass
class ChannelGrouping:
    fallback_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fallbackName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: Optional[List[rule.Rule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
