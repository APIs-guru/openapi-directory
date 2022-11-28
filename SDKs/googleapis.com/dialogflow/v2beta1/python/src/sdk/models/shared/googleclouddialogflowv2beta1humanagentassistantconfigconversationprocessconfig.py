from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig:
    r"""GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig
    Config to process conversation.
    """
    
    recent_sentences_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentSentencesCount') }})
    
