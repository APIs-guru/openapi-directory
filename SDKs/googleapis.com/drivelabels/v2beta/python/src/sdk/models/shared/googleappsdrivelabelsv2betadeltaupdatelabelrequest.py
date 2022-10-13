from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest
from . import googleappsdrivelabelsv2betawritecontrol

class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum(str, Enum):
    LABEL_VIEW_BASIC = "LABEL_VIEW_BASIC"
    LABEL_VIEW_FULL = "LABEL_VIEW_FULL"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    requests: Optional[List[googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAdminAccess' }})
    view: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    write_control: Optional[googleappsdrivelabelsv2betawritecontrol.GoogleAppsDriveLabelsV2betaWriteControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeControl' }})
    
