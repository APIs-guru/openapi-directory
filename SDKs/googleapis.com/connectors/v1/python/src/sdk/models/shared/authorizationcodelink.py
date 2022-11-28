from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthorizationCodeLink:
    r"""AuthorizationCodeLink
    This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    enable_pkce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePkce') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
