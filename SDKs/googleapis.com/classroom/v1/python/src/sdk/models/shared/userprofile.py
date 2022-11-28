from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserProfile:
    r"""UserProfile
    Global information for a user.
    """
    
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[Name] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permissions: Optional[List[GlobalPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    verified_teacher: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedTeacher') }})
    
