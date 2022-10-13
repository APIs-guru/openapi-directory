from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalifecycledisabledpolicy
from . import googleappsdrivelabelsv2betawritecontrol


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDisableLabelRequest:
    disabled_policy: Optional[googleappsdrivelabelsv2betalifecycledisabledpolicy.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledPolicy' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAdminAccess' }})
    write_control: Optional[googleappsdrivelabelsv2betawritecontrol.GoogleAppsDriveLabelsV2betaWriteControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeControl' }})
    
