from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResetPasswordResponse:
    r"""ResetPasswordResponse
    Response of resetting the password.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    new_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newEmail') }})
    request_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestType') }})
    
