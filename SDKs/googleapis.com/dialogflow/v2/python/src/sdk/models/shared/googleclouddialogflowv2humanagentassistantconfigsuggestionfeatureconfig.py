from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2humanagentassistantconfigconversationmodelconfig
from . import googleclouddialogflowv2humanagentassistantconfigconversationprocessconfig
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfig
from . import googleclouddialogflowv2suggestionfeature
from . import googleclouddialogflowv2humanagentassistantconfigsuggestiontriggersettings


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig:
    conversation_model_config: Optional[googleclouddialogflowv2humanagentassistantconfigconversationmodelconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationModelConfig' }})
    conversation_process_config: Optional[googleclouddialogflowv2humanagentassistantconfigconversationprocessconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationProcessConfig' }})
    enable_event_based_suggestion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableEventBasedSuggestion' }})
    query_config: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryConfig' }})
    suggestion_feature: Optional[googleclouddialogflowv2suggestionfeature.GoogleCloudDialogflowV2SuggestionFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionFeature' }})
    suggestion_trigger_settings: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestiontriggersettings.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionTriggerSettings' }})
    
