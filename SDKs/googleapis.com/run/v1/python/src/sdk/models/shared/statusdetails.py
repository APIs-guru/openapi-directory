from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import statuscause


@dataclass_json
@dataclass
class StatusDetails:
    causes: Optional[List[statuscause.StatusCause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'causes' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    retry_after_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryAfterSeconds' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
