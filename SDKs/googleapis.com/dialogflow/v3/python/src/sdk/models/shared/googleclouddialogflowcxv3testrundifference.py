from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum(str, Enum):
    DIFF_TYPE_UNSPECIFIED = "DIFF_TYPE_UNSPECIFIED"
    INTENT = "INTENT"
    PAGE = "PAGE"
    PARAMETERS = "PARAMETERS"
    UTTERANCE = "UTTERANCE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TestRunDifference:
    r"""GoogleCloudDialogflowCxV3TestRunDifference
    The description of differences between original and replayed agent output.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    type: Optional[GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
