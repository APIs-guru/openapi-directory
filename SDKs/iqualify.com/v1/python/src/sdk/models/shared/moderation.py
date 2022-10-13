from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import moderator


@dataclass_json
@dataclass
class Moderation:
    is_muted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMuted' }})
    moderator: Optional[moderator.Moderator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderator' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
