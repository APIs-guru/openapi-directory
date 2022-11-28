from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EXAMPLE = "EXAMPLE"
    TEMPLATE = "TEMPLATE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentTrainingPhrase:
    r"""GoogleCloudDialogflowV2beta1IntentTrainingPhrase
    Represents an example that the agent is trained on.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parts: Optional[List[GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    times_added_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timesAddedCount') }})
    type: Optional[GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
