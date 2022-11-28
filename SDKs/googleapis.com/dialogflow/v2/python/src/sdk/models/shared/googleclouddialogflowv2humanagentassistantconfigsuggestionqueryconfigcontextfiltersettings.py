from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings:
    r"""GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings
    Settings that determine how to filter recent conversation context when generating suggestions.
    """
    
    drop_handoff_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropHandoffMessages') }})
    drop_ivr_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropIvrMessages') }})
    drop_virtual_agent_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropVirtualAgentMessages') }})
    
