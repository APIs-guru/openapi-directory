from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest:
    r"""IdentitytoolkitRelyingpartyVerifyCustomTokenRequest
    Request to verify a custom token
    """
    
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegatedProjectNumber') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    return_secure_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnSecureToken') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
