from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalabelpermission


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest:
    label_permission: Optional[googleappsdrivelabelsv2betalabelpermission.GoogleAppsDriveLabelsV2betaLabelPermission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelPermission' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAdminAccess' }})
    
