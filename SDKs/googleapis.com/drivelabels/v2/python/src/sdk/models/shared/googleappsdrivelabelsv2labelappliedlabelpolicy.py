from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum(str, Enum):
    COPY_MODE_UNSPECIFIED = "COPY_MODE_UNSPECIFIED"
    DO_NOT_COPY = "DO_NOT_COPY"
    ALWAYS_COPY = "ALWAYS_COPY"
    COPY_APPLIABLE = "COPY_APPLIABLE"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy:
    r"""GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy
    Behavior of this label when it's applied to Drive items.
    """
    
    copy_mode: Optional[GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyMode') }})
    
