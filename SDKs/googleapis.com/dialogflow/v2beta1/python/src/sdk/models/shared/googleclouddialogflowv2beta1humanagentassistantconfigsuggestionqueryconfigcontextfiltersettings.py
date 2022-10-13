from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings:
    drop_handoff_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropHandoffMessages' }})
    drop_ivr_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropIvrMessages' }})
    drop_virtual_agent_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropVirtualAgentMessages' }})
    
