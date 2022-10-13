from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionconfig
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionconfig
from . import googleclouddialogflowv2humanagentassistantconfigmessageanalysisconfig
from . import googleclouddialogflowv2notificationconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfig:
    end_user_suggestion_config: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestionconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endUserSuggestionConfig' }})
    human_agent_suggestion_config: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestionconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAgentSuggestionConfig' }})
    message_analysis_config: Optional[googleclouddialogflowv2humanagentassistantconfigmessageanalysisconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageAnalysisConfig' }})
    notification_config: Optional[googleclouddialogflowv2notificationconfig.GoogleCloudDialogflowV2NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    
