from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userprofile


@dataclass_json
@dataclass
class UserProfileList:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[userprofile.UserProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
