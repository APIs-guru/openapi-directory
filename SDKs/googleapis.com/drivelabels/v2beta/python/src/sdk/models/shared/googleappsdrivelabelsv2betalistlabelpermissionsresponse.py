from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalabelpermission


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse:
    label_permissions: Optional[List[googleappsdrivelabelsv2betalabelpermission.GoogleAppsDriveLabelsV2betaLabelPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelPermissions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
