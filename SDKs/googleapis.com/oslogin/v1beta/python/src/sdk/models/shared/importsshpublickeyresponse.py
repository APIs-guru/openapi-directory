from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportSSHPublicKeyResponse:
    r"""ImportSSHPublicKeyResponse
    A response message for importing an SSH public key.
    """
    
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    login_profile: Optional[LoginProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginProfile') }})
    
