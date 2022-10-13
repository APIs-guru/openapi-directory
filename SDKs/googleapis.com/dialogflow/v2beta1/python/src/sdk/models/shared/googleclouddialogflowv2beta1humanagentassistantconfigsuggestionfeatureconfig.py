from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1humanagentassistantconfigconversationmodelconfig
from . import googleclouddialogflowv2beta1humanagentassistantconfigconversationprocessconfig
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfig
from . import googleclouddialogflowv2beta1suggestionfeature
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestiontriggersettings


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig:
    conversation_model_config: Optional[googleclouddialogflowv2beta1humanagentassistantconfigconversationmodelconfig.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationModelConfig' }})
    conversation_process_config: Optional[googleclouddialogflowv2beta1humanagentassistantconfigconversationprocessconfig.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationProcessConfig' }})
    enable_event_based_suggestion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableEventBasedSuggestion' }})
    query_config: Optional[googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfig.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryConfig' }})
    suggestion_feature: Optional[googleclouddialogflowv2beta1suggestionfeature.GoogleCloudDialogflowV2beta1SuggestionFeature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionFeature' }})
    suggestion_trigger_settings: Optional[googleclouddialogflowv2beta1humanagentassistantconfigsuggestiontriggersettings.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionTriggerSettings' }})
    
