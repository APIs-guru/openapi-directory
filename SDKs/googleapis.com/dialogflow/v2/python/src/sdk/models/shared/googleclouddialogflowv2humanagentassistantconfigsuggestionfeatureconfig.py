from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig:
    r"""GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig
    Config for suggestion features.
    """
    
    conversation_model_config: Optional[GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationModelConfig') }})
    conversation_process_config: Optional[GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationProcessConfig') }})
    enable_event_based_suggestion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableEventBasedSuggestion') }})
    query_config: Optional[GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryConfig') }})
    suggestion_feature: Optional[GoogleCloudDialogflowV2SuggestionFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionFeature') }})
    suggestion_trigger_settings: Optional[GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionTriggerSettings') }})
    
