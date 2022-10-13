from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGNMENT_UNSPECIFIED = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    LEADING = "LEADING"
    CENTER = "CENTER"
    TRAILING = "TRAILING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageColumnProperties:
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    horizontal_alignment: Optional[GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalAlignment' }})
    
