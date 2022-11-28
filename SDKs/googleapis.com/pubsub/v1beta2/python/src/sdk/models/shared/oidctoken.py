from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OidcToken:
    r"""OidcToken
    Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect).
    """
    
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    
