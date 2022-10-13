from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestionconfig
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestionconfig
from . import googleclouddialogflowv2beta1humanagentassistantconfigmessageanalysisconfig
from . import googleclouddialogflowv2beta1notificationconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig:
    end_user_suggestion_config: Optional[googleclouddialogflowv2beta1humanagentassistantconfigsuggestionconfig.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endUserSuggestionConfig' }})
    human_agent_suggestion_config: Optional[googleclouddialogflowv2beta1humanagentassistantconfigsuggestionconfig.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAgentSuggestionConfig' }})
    message_analysis_config: Optional[googleclouddialogflowv2beta1humanagentassistantconfigmessageanalysisconfig.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageAnalysisConfig' }})
    notification_config: Optional[googleclouddialogflowv2beta1notificationconfig.GoogleCloudDialogflowV2beta1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    
