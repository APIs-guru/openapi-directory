from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    r"""User
    A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
    
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restricted') }})
    ssh_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_keys') }})
    tfa_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfa_enabled') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class UserInput:
    r"""UserInput
    A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
    
    """
    
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restricted') }})
    ssh_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_keys') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
