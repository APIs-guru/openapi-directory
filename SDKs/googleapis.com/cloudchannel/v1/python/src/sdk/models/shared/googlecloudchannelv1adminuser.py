from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudChannelV1AdminUser:
    r"""GoogleCloudChannelV1AdminUser
    Information needed to create an Admin User for Google Workspace.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    
