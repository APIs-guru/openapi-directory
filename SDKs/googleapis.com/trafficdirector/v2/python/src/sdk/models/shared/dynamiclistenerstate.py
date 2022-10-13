from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DynamicListenerState:
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated' }})
    listener: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listener' }})
    version_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionInfo' }})
    
