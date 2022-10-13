from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalabelpermission


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse:
    permissions: Optional[List[googleappsdrivelabelsv2betalabelpermission.GoogleAppsDriveLabelsV2betaLabelPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
