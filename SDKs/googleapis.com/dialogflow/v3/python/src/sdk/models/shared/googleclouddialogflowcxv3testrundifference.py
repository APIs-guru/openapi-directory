from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum(str, Enum):
    DIFF_TYPE_UNSPECIFIED = "DIFF_TYPE_UNSPECIFIED"
    INTENT = "INTENT"
    PAGE = "PAGE"
    PARAMETERS = "PARAMETERS"
    UTTERANCE = "UTTERANCE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TestRunDifference:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    type: Optional[GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
