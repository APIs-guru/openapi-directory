from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig:
    r"""GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig
    Defines the Human Agent Assistant to connect to a conversation.
    """
    
    end_user_suggestion_config: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endUserSuggestionConfig') }})
    human_agent_suggestion_config: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAgentSuggestionConfig') }})
    message_analysis_config: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageAnalysisConfig') }})
    notification_config: Optional[GoogleCloudDialogflowV2beta1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    
