from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PushConfig:
    r"""PushConfig
    Configuration for a push delivery endpoint.
    """
    
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    oidc_token: Optional[OidcToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcToken') }})
    push_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushEndpoint') }})
    
