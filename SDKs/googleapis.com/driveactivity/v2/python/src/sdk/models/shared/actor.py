from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import impersonation
from . import systemevent
from . import user


@dataclass_json
@dataclass
class Actor:
    administrator: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrator' }})
    anonymous: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anonymous' }})
    impersonation: Optional[impersonation.Impersonation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impersonation' }})
    system: Optional[systemevent.SystemEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
