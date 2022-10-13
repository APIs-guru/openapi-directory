from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum(str, Enum):
    COPY_MODE_UNSPECIFIED = "COPY_MODE_UNSPECIFIED"
    DO_NOT_COPY = "DO_NOT_COPY"
    ALWAYS_COPY = "ALWAYS_COPY"
    COPY_APPLIABLE = "COPY_APPLIABLE"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy:
    copy_mode: Optional[GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyMode' }})
    
