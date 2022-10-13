from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserProfile:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    
