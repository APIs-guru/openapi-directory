from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betaupdatelabelpermissionrequest


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest:
    requests: Optional[List[googleappsdrivelabelsv2betaupdatelabelpermissionrequest.GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAdminAccess' }})
    
