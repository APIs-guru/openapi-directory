from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tokeninfo:
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_verified') }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    issued_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issued_at') }})
    issued_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issued_to') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    verified_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified_email') }})
    
