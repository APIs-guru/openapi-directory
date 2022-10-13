from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import knownuser


@dataclass_json
@dataclass
class User:
    deleted_user: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedUser' }})
    known_user: Optional[knownuser.KnownUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knownUser' }})
    unknown_user: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknownUser' }})
    
