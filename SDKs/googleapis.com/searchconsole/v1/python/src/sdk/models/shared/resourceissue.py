from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import blockedresource


@dataclass_json
@dataclass
class ResourceIssue:
    blocked_resource: Optional[blockedresource.BlockedResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockedResource' }})
    
