from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1automatedagentconfig
from . import googleclouddialogflowv2beta1humanagentassistantconfig
from . import googleclouddialogflowv2beta1humanagenthandoffconfig
from . import googleclouddialogflowv2beta1loggingconfig
from . import googleclouddialogflowv2beta1notificationconfig
from . import googleclouddialogflowv2beta1notificationconfig
from . import googleclouddialogflowv2beta1speechtotextconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ConversationProfile:
    automated_agent_config: Optional[googleclouddialogflowv2beta1automatedagentconfig.GoogleCloudDialogflowV2beta1AutomatedAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatedAgentConfig' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    human_agent_assistant_config: Optional[googleclouddialogflowv2beta1humanagentassistantconfig.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAgentAssistantConfig' }})
    human_agent_handoff_config: Optional[googleclouddialogflowv2beta1humanagenthandoffconfig.GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAgentHandoffConfig' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    logging_config: Optional[googleclouddialogflowv2beta1loggingconfig.GoogleCloudDialogflowV2beta1LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    new_message_event_notification_config: Optional[googleclouddialogflowv2beta1notificationconfig.GoogleCloudDialogflowV2beta1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newMessageEventNotificationConfig' }})
    notification_config: Optional[googleclouddialogflowv2beta1notificationconfig.GoogleCloudDialogflowV2beta1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    security_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securitySettings' }})
    stt_config: Optional[googleclouddialogflowv2beta1speechtotextconfig.GoogleCloudDialogflowV2beta1SpeechToTextConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sttConfig' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
