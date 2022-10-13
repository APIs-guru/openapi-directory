from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Reviewer:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    is_anonymous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAnonymous' }})
    profile_photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilePhotoUrl' }})
    
