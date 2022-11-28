from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EXAMPLE = "EXAMPLE"
    TEMPLATE = "TEMPLATE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentTrainingPhrase:
    r"""GoogleCloudDialogflowV2IntentTrainingPhrase
    Represents an example that the agent is trained on.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parts: Optional[List[GoogleCloudDialogflowV2IntentTrainingPhrasePart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    times_added_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timesAddedCount') }})
    type: Optional[GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
