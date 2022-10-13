from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2automatedagentconfig
from . import googleclouddialogflowv2humanagentassistantconfig
from . import googleclouddialogflowv2humanagenthandoffconfig
from . import googleclouddialogflowv2loggingconfig
from . import googleclouddialogflowv2notificationconfig
from . import googleclouddialogflowv2notificationconfig
from . import googleclouddialogflowv2speechtotextconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationProfile:
    automated_agent_config: Optional[googleclouddialogflowv2automatedagentconfig.GoogleCloudDialogflowV2AutomatedAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatedAgentConfig' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    human_agent_assistant_config: Optional[googleclouddialogflowv2humanagentassistantconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAgentAssistantConfig' }})
    human_agent_handoff_config: Optional[googleclouddialogflowv2humanagenthandoffconfig.GoogleCloudDialogflowV2HumanAgentHandoffConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAgentHandoffConfig' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    logging_config: Optional[googleclouddialogflowv2loggingconfig.GoogleCloudDialogflowV2LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    new_message_event_notification_config: Optional[googleclouddialogflowv2notificationconfig.GoogleCloudDialogflowV2NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newMessageEventNotificationConfig' }})
    notification_config: Optional[googleclouddialogflowv2notificationconfig.GoogleCloudDialogflowV2NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    security_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securitySettings' }})
    stt_config: Optional[googleclouddialogflowv2speechtotextconfig.GoogleCloudDialogflowV2SpeechToTextConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sttConfig' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
