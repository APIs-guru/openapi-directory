from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig
    Options related to how clients making requests on behalf of a tenant should be configured.
    """
    
    permissions: Optional[GoogleCloudIdentitytoolkitAdminV2ClientPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
