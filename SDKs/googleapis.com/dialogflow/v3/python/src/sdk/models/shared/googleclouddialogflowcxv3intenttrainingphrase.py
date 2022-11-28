from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3IntentTrainingPhrase:
    r"""GoogleCloudDialogflowCxV3IntentTrainingPhrase
    Represents an example that the agent is trained on to identify the intent.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    parts: Optional[List[GoogleCloudDialogflowCxV3IntentTrainingPhrasePart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    repeat_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatCount') }})
    
