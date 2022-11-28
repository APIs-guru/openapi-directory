from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OAuthSettings:
    r"""OAuthSettings
    Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
    """
    
    login_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginHint') }})
    
