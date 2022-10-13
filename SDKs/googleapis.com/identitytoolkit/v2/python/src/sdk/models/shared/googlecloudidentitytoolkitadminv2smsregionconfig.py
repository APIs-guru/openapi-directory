from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2allowbydefault
from . import googlecloudidentitytoolkitadminv2allowlistonly


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig:
    allow_by_default: Optional[googlecloudidentitytoolkitadminv2allowbydefault.GoogleCloudIdentitytoolkitAdminV2AllowByDefault] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowByDefault' }})
    allowlist_only: Optional[googlecloudidentitytoolkitadminv2allowlistonly.GoogleCloudIdentitytoolkitAdminV2AllowlistOnly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowlistOnly' }})
    
