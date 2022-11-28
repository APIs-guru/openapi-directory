from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig:
    r"""GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig
    Custom conversation models used in agent assist feature. Supported feature: ARTICLE_SUGGESTION, SMART_COMPOSE, SMART_REPLY, CONVERSATION_SUMMARIZATION.
    """
    
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
