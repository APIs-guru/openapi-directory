from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1EventInput:
    r"""GoogleCloudDialogflowV2beta1EventInput
    Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `\"Hello #welcome_event.name! What can I do for you today?\"`.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
