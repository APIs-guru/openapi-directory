from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import trigger
from . import variable


@dataclass_json
@dataclass
class FolderEntities:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tag: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    trigger: Optional[List[trigger.Trigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    variable: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variable' }})
    
