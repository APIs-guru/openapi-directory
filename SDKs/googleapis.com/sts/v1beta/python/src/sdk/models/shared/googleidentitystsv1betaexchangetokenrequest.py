from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleIdentityStsV1betaExchangeTokenRequest:
    r"""GoogleIdentityStsV1betaExchangeTokenRequest
    Request message for ExchangeToken.
    """
    
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    grant_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantType') }})
    options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    requested_token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedTokenType') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    subject_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectToken') }})
    subject_token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectTokenType') }})
    
