from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProfileSettings:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    profile_visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileVisible' }})
    
