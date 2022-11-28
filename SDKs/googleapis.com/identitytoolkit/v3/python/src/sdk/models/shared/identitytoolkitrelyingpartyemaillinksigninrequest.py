from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyEmailLinkSigninRequest:
    r"""IdentitytoolkitRelyingpartyEmailLinkSigninRequest
    Request to sign in with email.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    oob_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oobCode') }})
    
