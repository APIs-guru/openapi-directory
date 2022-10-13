from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum(str, Enum):
    COPY_MODE_UNSPECIFIED = "COPY_MODE_UNSPECIFIED"
    DO_NOT_COPY = "DO_NOT_COPY"
    ALWAYS_COPY = "ALWAYS_COPY"
    COPY_APPLIABLE = "COPY_APPLIABLE"

class GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum(str, Enum):
    LABEL_VIEW_BASIC = "LABEL_VIEW_BASIC"
    LABEL_VIEW_FULL = "LABEL_VIEW_FULL"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest:
    copy_mode: Optional[GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyMode' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAdminAccess' }})
    view: Optional[GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
