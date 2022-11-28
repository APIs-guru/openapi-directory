from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo:
    r"""GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo
    Represents a single followup intent in the chain.
    """
    
    followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followupIntentName') }})
    parent_followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFollowupIntentName') }})
    
