from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddMatterPermissionsRequest:
    r"""AddMatterPermissionsRequest
    Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
    """
    
    cc_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccMe') }})
    matter_permission: Optional[MatterPermission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matterPermission') }})
    send_emails: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendEmails') }})
    
