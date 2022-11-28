from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyResetPasswordRequest:
    r"""IdentitytoolkitRelyingpartyResetPasswordRequest
    Request to reset the password.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    new_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPassword') }})
    old_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldPassword') }})
    oob_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oobCode') }})
    
