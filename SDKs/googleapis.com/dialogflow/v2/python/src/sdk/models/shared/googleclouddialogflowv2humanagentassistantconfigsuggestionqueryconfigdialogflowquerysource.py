from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource:
    r"""GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource
    Dialogflow source setting. Supported feature: DIALOGFLOW_ASSIST.
    """
    
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent') }})
    
