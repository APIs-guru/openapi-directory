from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateUserEasyPassword:
    r"""UpdateUserEasyPassword
    The update user easy password request body.
    """
    
    new_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewPassword') }})
    new_pw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewPw') }})
    reset_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResetPassword') }})
    
