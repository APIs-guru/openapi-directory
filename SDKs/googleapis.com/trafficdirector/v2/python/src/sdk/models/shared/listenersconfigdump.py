from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamiclistener
from . import staticlistener


@dataclass_json
@dataclass
class ListenersConfigDump:
    dynamic_listeners: Optional[List[dynamiclistener.DynamicListener]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicListeners' }})
    static_listeners: Optional[List[staticlistener.StaticListener]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticListeners' }})
    version_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionInfo' }})
    
