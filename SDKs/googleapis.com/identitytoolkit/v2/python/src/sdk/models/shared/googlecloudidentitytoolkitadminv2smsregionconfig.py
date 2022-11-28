from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig
    Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
    """
    
    allow_by_default: Optional[GoogleCloudIdentitytoolkitAdminV2AllowByDefault] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowByDefault') }})
    allowlist_only: Optional[GoogleCloudIdentitytoolkitAdminV2AllowlistOnly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowlistOnly') }})
    
