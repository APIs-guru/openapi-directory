from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageCardButton:
    r"""GoogleCloudDialogflowV2IntentMessageCardButton
    Contains information about a button.
    """
    
    postback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postback') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
