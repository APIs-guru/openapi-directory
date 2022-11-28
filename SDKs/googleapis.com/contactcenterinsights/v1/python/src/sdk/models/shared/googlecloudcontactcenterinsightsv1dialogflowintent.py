from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1DialogflowIntent:
    r"""GoogleCloudContactcenterinsightsV1DialogflowIntent
    The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
