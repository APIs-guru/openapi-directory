from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Context:
    r"""GoogleCloudDialogflowV2beta1Context
    Dialogflow contexts are similar to natural language context. If a person says to you \"they are orange\", you need context in order to understand what \"they\" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).
    """
    
    lifespan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifespanCount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
