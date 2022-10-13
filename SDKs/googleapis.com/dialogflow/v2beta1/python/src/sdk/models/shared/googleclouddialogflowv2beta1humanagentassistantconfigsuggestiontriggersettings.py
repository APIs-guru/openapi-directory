from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings:
    no_small_talk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noSmallTalk' }})
    only_end_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlyEndUser' }})
    
