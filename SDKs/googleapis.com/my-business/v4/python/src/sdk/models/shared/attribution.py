from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Attribution:
    r"""Attribution
    Attribution information for customer media items, such as the contributor's name and profile picture.
    """
    
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileName') }})
    profile_photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilePhotoUrl') }})
    profile_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileUrl') }})
    takedown_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('takedownUrl') }})
    
