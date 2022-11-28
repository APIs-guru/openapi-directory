from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoginProfile:
    r"""LoginProfile
    The user profile information used for logging in to a virtual machine on Google Compute Engine.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    posix_accounts: Optional[List[PosixAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixAccounts') }})
    security_keys: Optional[List[SecurityKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityKeys') }})
    ssh_public_keys: Optional[dict[str, SSHPublicKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKeys') }})
    
