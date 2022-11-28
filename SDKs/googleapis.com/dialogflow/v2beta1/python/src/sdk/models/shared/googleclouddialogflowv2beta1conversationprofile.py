from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ConversationProfile:
    r"""GoogleCloudDialogflowV2beta1ConversationProfile
    Defines the services to connect to incoming Dialogflow conversations.
    """
    
    automated_agent_config: Optional[GoogleCloudDialogflowV2beta1AutomatedAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatedAgentConfig') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    human_agent_assistant_config: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAgentAssistantConfig') }})
    human_agent_handoff_config: Optional[GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAgentHandoffConfig') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    logging_config: Optional[GoogleCloudDialogflowV2beta1LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    new_message_event_notification_config: Optional[GoogleCloudDialogflowV2beta1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newMessageEventNotificationConfig') }})
    notification_config: Optional[GoogleCloudDialogflowV2beta1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    security_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securitySettings') }})
    stt_config: Optional[GoogleCloudDialogflowV2beta1SpeechToTextConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sttConfig') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ConversationProfileInput:
    r"""GoogleCloudDialogflowV2beta1ConversationProfileInput
    Defines the services to connect to incoming Dialogflow conversations.
    """
    
    automated_agent_config: Optional[GoogleCloudDialogflowV2beta1AutomatedAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatedAgentConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    human_agent_assistant_config: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAgentAssistantConfig') }})
    human_agent_handoff_config: Optional[GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAgentHandoffConfig') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    logging_config: Optional[GoogleCloudDialogflowV2beta1LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    new_message_event_notification_config: Optional[GoogleCloudDialogflowV2beta1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newMessageEventNotificationConfig') }})
    notification_config: Optional[GoogleCloudDialogflowV2beta1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    security_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securitySettings') }})
    stt_config: Optional[GoogleCloudDialogflowV2beta1SpeechToTextConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sttConfig') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
