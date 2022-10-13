from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FailoverContext:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    settings_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingsVersion' }})
    
