from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Attribution:
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileName' }})
    profile_photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilePhotoUrl' }})
    profile_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileUrl' }})
    takedown_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'takedownUrl' }})
    
