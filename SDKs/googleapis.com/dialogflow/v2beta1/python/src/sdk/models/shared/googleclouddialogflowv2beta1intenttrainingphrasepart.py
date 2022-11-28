from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart:
    r"""GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart
    Represents a part of a training phrase.
    """
    
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityType') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    user_defined: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefined') }})
    
