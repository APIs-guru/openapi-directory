from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings:
    r"""GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings
    Settings of suggestion trigger.
    """
    
    no_small_talk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noSmallTalk') }})
    only_end_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyEndUser') }})
    
