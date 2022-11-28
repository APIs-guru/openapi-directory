from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    FACEBOOK = "FACEBOOK"
    SLACK = "SLACK"
    TELEGRAM = "TELEGRAM"
    KIK = "KIK"
    SKYPE = "SKYPE"
    LINE = "LINE"
    VIBER = "VIBER"
    ACTIONS_ON_GOOGLE = "ACTIONS_ON_GOOGLE"
    GOOGLE_HANGOUTS = "GOOGLE_HANGOUTS"

class GoogleCloudDialogflowV2IntentWebhookStateEnum(str, Enum):
    WEBHOOK_STATE_UNSPECIFIED = "WEBHOOK_STATE_UNSPECIFIED"
    WEBHOOK_STATE_ENABLED = "WEBHOOK_STATE_ENABLED"
    WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentInput:
    r"""GoogleCloudDialogflowV2IntentInput
    An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    default_response_platforms: Optional[List[GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultResponsePlatforms') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    end_interaction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endInteraction') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    input_context_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContextNames') }})
    is_fallback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFallback') }})
    live_agent_handoff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveAgentHandoff') }})
    messages: Optional[List[GoogleCloudDialogflowV2IntentMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    ml_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mlDisabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_contexts: Optional[List[GoogleCloudDialogflowV2Context]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parameters: Optional[List[GoogleCloudDialogflowV2IntentParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    parent_followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFollowupIntentName') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    reset_contexts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetContexts') }})
    training_phrases: Optional[List[GoogleCloudDialogflowV2IntentTrainingPhrase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingPhrases') }})
    webhook_state: Optional[GoogleCloudDialogflowV2IntentWebhookStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookState') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Intent:
    r"""GoogleCloudDialogflowV2Intent
    An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    default_response_platforms: Optional[List[GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultResponsePlatforms') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    end_interaction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endInteraction') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    followup_intent_info: Optional[List[GoogleCloudDialogflowV2IntentFollowupIntentInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followupIntentInfo') }})
    input_context_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContextNames') }})
    is_fallback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFallback') }})
    live_agent_handoff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveAgentHandoff') }})
    messages: Optional[List[GoogleCloudDialogflowV2IntentMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    ml_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mlDisabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_contexts: Optional[List[GoogleCloudDialogflowV2Context]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parameters: Optional[List[GoogleCloudDialogflowV2IntentParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    parent_followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFollowupIntentName') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    reset_contexts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetContexts') }})
    root_followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootFollowupIntentName') }})
    training_phrases: Optional[List[GoogleCloudDialogflowV2IntentTrainingPhrase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingPhrases') }})
    webhook_state: Optional[GoogleCloudDialogflowV2IntentWebhookStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookState') }})
    
