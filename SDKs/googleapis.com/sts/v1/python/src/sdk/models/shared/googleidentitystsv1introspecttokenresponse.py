from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleIdentityStsV1IntrospectTokenResponse:
    r"""GoogleIdentityStsV1IntrospectTokenResponse
    Response message for IntrospectToken.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    exp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp') }})
    iat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iat') }})
    iss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iss') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    sub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
