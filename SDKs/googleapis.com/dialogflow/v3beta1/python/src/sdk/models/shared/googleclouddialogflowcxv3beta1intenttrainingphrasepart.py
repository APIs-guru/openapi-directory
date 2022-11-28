from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart:
    r"""GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart
    Represents a part of a training phrase.
    """
    
    parameter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterId') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
