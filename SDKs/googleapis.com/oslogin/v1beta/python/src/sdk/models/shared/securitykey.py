from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecurityKey:
    r"""SecurityKey
    The credential information for a Google registered security key.
    """
    
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    universal_two_factor: Optional[UniversalTwoFactor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalTwoFactor') }})
    web_authn: Optional[WebAuthn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webAuthn') }})
    
