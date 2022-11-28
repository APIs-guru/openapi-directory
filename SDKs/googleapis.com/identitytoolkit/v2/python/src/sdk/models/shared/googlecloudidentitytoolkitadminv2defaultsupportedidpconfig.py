from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig
    Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
    """
    
    apple_sign_in_config: Optional[GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appleSignInConfig') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
