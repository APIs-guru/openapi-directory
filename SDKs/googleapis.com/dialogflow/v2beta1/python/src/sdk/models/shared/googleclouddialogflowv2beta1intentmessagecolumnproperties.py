from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGNMENT_UNSPECIFIED = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    LEADING = "LEADING"
    CENTER = "CENTER"
    TRAILING = "TRAILING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageColumnProperties:
    r"""GoogleCloudDialogflowV2beta1IntentMessageColumnProperties
    Column properties for TableCard.
    """
    
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    horizontal_alignment: Optional[GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalAlignment') }})
    
