from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betadeletelabelpermissionrequest


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest:
    requests: Optional[List[googleappsdrivelabelsv2betadeletelabelpermissionrequest.GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAdminAccess' }})
    
