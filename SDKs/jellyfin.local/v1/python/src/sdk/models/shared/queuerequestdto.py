from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import groupqueuemode_enum


@dataclass_json
@dataclass
class QueueRequestDto:
    item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemIds' }})
    mode: Optional[groupqueuemode_enum.GroupQueueModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    
