from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import quota


@dataclass_json
@dataclass
class Project:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    quota: Optional[quota.Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    
