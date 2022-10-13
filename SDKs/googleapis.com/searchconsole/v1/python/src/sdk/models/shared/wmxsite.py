from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WmxSitePermissionLevelEnum(str, Enum):
    SITE_PERMISSION_LEVEL_UNSPECIFIED = "SITE_PERMISSION_LEVEL_UNSPECIFIED"
    SITE_OWNER = "SITE_OWNER"
    SITE_FULL_USER = "SITE_FULL_USER"
    SITE_RESTRICTED_USER = "SITE_RESTRICTED_USER"
    SITE_UNVERIFIED_USER = "SITE_UNVERIFIED_USER"


@dataclass_json
@dataclass
class WmxSite:
    permission_level: Optional[WmxSitePermissionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionLevel' }})
    site_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteUrl' }})
    
