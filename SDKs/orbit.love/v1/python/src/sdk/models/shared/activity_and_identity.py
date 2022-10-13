from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import activity_with_member
from . import post_activity_with_member
from . import identity


@dataclass_json
@dataclass
class ActivityAndIdentity:
    activity: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    identity: Optional[identity.Identity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    
