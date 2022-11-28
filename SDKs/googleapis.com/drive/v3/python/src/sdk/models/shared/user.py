from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    r"""User
    Information about a Drive user.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('me') }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    photo_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoLink') }})
    
