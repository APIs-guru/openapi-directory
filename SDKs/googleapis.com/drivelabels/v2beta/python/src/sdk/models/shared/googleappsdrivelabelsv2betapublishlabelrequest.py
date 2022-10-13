from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betawritecontrol


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaPublishLabelRequest:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAdminAccess' }})
    write_control: Optional[googleappsdrivelabelsv2betawritecontrol.GoogleAppsDriveLabelsV2betaWriteControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeControl' }})
    
