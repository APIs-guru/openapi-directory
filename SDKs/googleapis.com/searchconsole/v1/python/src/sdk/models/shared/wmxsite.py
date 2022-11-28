from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WmxSitePermissionLevelEnum(str, Enum):
    SITE_PERMISSION_LEVEL_UNSPECIFIED = "SITE_PERMISSION_LEVEL_UNSPECIFIED"
    SITE_OWNER = "SITE_OWNER"
    SITE_FULL_USER = "SITE_FULL_USER"
    SITE_RESTRICTED_USER = "SITE_RESTRICTED_USER"
    SITE_UNVERIFIED_USER = "SITE_UNVERIFIED_USER"


@dataclass_json
@dataclass
class WmxSite:
    r"""WmxSite
    Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).
    """
    
    permission_level: Optional[WmxSitePermissionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionLevel') }})
    site_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteUrl') }})
    
